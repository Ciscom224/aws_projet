const express= require("express");
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const userRoutes=require('./routes/user.routes');
const quizRoutes=require("./routes/quiz.routes.js")
const { Server } = require('socket.io');
const { createServer } = require('http');

require('dotenv').config({path:' .env'})
require('./db.js')
const {verifyUser, requireAuth}=require('./middleware/auth.middleware.js')
const cors =require('cors');
const app=express();
const server = createServer(app);
app.use(cors({origin:process.env.URL_CLIENT,credentials:true}));

//Pour Socket

const io = new Server(server,{cors:{origin:process.env.URL_CLIENT}});
const rooms = {};
let playersInGame = [];
let roomNumber = 1;

io.on('connection',(socket) => {
    console.log(socket.id)
    
    socket.on('send_message',(username,message,roomID) => {
        socket.to(roomID).emit('message',username,message)
    })

    socket.on('getRoom',(roomID,site,callback) => {
        roomIDint = parseInt(roomID, 10)
        for (const roomID in rooms) {
            if (rooms.hasOwnProperty(roomID)) {
                const room = rooms[roomID];
                if (room.roomID === roomIDint) {
                    targetRoom = room;
                    break;
                }
            }
        }
        callback([targetRoom.playersDetails,targetRoom.themeSelect]);
        

    })

    socket.on('deleteRoom',(roomID) => {
        delete rooms[roomID];
        console.log("Room" + roomID + "supprimé!")
        io.emit('lobby_changed');
    })
    socket.on('new_points',(roomID,username,points) => {
        const room = rooms[parseInt(roomID,10)];
        const playersDetails = room.playersDetails;

        for (let i = 0; i < playersDetails.length; i++) {
            const playerDetail = playersDetails[i];
            const playerName = playerDetail[0];
            if (playerName === username) {
                rooms[roomID].playersDetails[i][3] += points;
            }
        }
    })
    socket.on('getSubmitted',(roomID,callback) => {
        const room = rooms[roomID];
        const allSubmitted = room.playersSubmit.every((value) => value === true);
        callback(allSubmitted);
    })

    socket.on('getRooms',(callback) => {
        const allPlayersDetails = [];
        const room_ID = [];
        for (const roomID in rooms) {
            if (Object.hasOwnProperty.call(rooms, roomID)) {
                const room = rooms[roomID];
                const playerDetails = room.playersDetails;
                allPlayersDetails.push(playerDetails);
                room_ID.push(room.roomID);
            }
        }
        console.log(allPlayersDetails)
        callback(allPlayersDetails)
    })
    socket.on('getQuiz',(roomID,callback) => {
        const room = rooms[roomID];
        if(room) {callback([room.questions,room.choices,room.answers,room.theme])}
        else {callback(null)}
    })

    socket.on('join_room',(username,photo,room_ID,callback) => {
        const roomID = parseInt(room_ID,10)
        if (playersInGame.includes(socket.id) && !rooms[roomID].players.includes(socket.id))
            {
                return callback(false)
            }

        if (rooms[roomID] && rooms[roomID].players) {
            if (rooms[roomID].players.length < 5 && rooms[roomID].started === false) {
                if (!rooms[roomID].players.includes(socket.id)) {
                    rooms[roomID].players.push(socket.id)
                    playersInGame.push(socket.id)
                    rooms[roomID].playersDetails.push([username,photo,"border-transparent",0])
                    rooms[roomID].playersSubmit.push(false)
                    socket.join(roomID);
                    io.emit('lobby_changed');
                }
                
                return callback([true,rooms[roomID].roomID]);
            } else { return callback(false);}
        } else {
            return callback(false);
        }
    })

    socket.on('disconnected',(room_ID) => {
        const roomID = parseInt(room_ID,10)
        console.log("On déco le joueur a la room" + roomID)
        if (rooms[roomID]) {
            const playerIndex = rooms[roomID].players.findIndex(playerId => playerId === socket.id);
            playersInGame = playersInGame.filter(item => item !== socket.id);
            socket.leave(rooms[roomID].roomID);
            if (playerIndex !== -1) {
                rooms[roomID].players.splice(playerIndex, 1);
                rooms[roomID].playersDetails.splice(playerIndex, 1);
                rooms[roomID].playersSubmit.splice(playerIndex, 1);
                console.log(rooms[roomID].playersDetails)
                io.emit('lobby_changed');
                //console.log("joueur déconnecté avec succès!" + rooms[roomID].playersDetails)
        }}
        
    })

    socket.on('reset_submit',(roomID) => {
        rooms[roomID].playersSubmit.fill(false);
    })

    socket.on('new_border', (roomID, username, color) => {
        const room = rooms[parseInt(roomID,10)];
        if (room) {
            const playersDetails = room.playersDetails;
            for (let i = 0; i < playersDetails.length; i++) {
                const playerDetail = playersDetails[i];
                const playerName = playerDetail[0];
                if (playerName === username) {
                    rooms[roomID].playersDetails[i][2] = color;
                    // permet de dire qu'un joueur a effectué un submit
                    if (color === "border-[#ADA3A1]") {
                        rooms[roomID].playersSubmit[i] = true;
                        const allSubmitted = room.playersSubmit.every((value) => value === true);
                        if (allSubmitted) {
                            socket.to(parseInt(roomID, 10)).emit('allSubmit');
                        }
                        
                    }
                    console.log("La couleur du joueur", username, "dans la salle", roomID, "a été mise à jour avec", color);
                    socket.to(parseInt(roomID, 10)).emit('color_changed');
                    break; 
                }
            }
            
        }
       
    });
    socket.on('create_room',(username,photo,themeSelect,theme,questions,choices,answers,callback) => {

        const newRoom = Object.keys(rooms).length + 1 ;
        socket.join(roomNumber)
        rooms[newRoom] = {
            roomID:roomNumber,
            players:[socket.id],
            playersDetails:[[username,photo,"border-transparent",0]],
            playersSubmit:[false],
            started:false,
            kicked:[],
            themeSelect:themeSelect,
            theme:theme,
            questions:questions,
            choices:choices,
            answers:answers
        }
        playersInGame.push(socket.id)
        io.emit('lobby_changed');
        roomNumber += 1;
        callback(rooms[newRoom].roomID);
        
        

        
    })

    socket.on('start_game', (roomID) => {
        if (rooms[roomID]) {
            rooms[roomID].started = true;
            console.log("Game numéro lancé : "+ roomID)
            socket.to(parseInt(roomID, 10)).emit('game_started');
        }
    });
})

app.use(bodyParser.json()) 
app.use(cookieParser())

// jwt 
app.get('*',verifyUser)
app.get('/jwtid',requireAuth,(req,res)=>{
    res.status(201).send(res.locals.user._id);
})
//Les routes 
app.use('/api/user',userRoutes);
app.use('/api/quiz',quizRoutes);
// lancement du server
server.listen(process.env.PORT,() => {
    console.log("Serveur actif ... "+process.env.PORT+" port")
})