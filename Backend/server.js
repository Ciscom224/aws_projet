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

const io = new Server(server,{cors:{origin:'http://localhost:3000'}});
const rooms = {};
console.log(rooms)

io.on('connection',(socket) => {
    console.log(socket.id)
    
    socket.on('send_message',(username,message,roomID) => {
        socket.to(roomID).emit('message',username,message)
    })

    socket.on('getRoom',(roomID,callback) => {
        const room = rooms[roomID];
        callback([room.playersDetails,room.themeSelect]);

    })

    socket.on('getRooms',(callback) => {
        const allPlayersDetails = [];
        for (const roomID in rooms) {
            if (Object.hasOwnProperty.call(rooms, roomID)) {
                const room = rooms[roomID];
                const playerDetails = room.playersDetails;
                allPlayersDetails.push(playerDetails);
            }
        }
        callback(allPlayersDetails)
    })
    socket.on('getQuiz',(roomID,callback) => {
        const room = rooms[roomID];
        if(room) {callback([room.questions,room.choices,room.answers,room.theme])}
        else {callback(null)}
    })

    socket.on('join_room',(username,photo,roomID,callback) => {
        if (rooms[roomID] && rooms[roomID].players) {
            if (rooms[roomID].players.length < 5 && rooms[roomID].started === false) {
                rooms[roomID].players.push(socket.id)
                rooms[roomID].playersDetails.push([username,photo])
                socket.join(roomID);
                io.emit('lobby_changed');
                callback(true);
            } else {callback(false);}
        } else {
            callback(false);
        }
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
                    console.log("La couleur du joueur", username, "dans la salle", roomID, "a été mise à jour avec", color);
                    socket.to(parseInt(roomID, 10)).emit('color_changed');
                    break; 
                }
            }
        } 
    });
    socket.on('create_room',(username,photo,themeSelect,theme,questions,choices,answers,callback) => {

        const newRoom = Object.keys(rooms).length + 1 ;
        console.log(newRoom)
        socket.join(newRoom)
        rooms[newRoom] = {
            players:[socket.id],
            playersDetails:[[username,photo,"border-transparent"]],
            started:false,
            kicked:[],
            themeSelect:themeSelect,
            theme:theme,
            questions:questions,
            choices:choices,
            answers:answers
        }
        io.emit('lobby_changed');
        callback(newRoom);
        
        

        
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