const express= require("express");
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const userRoutes=require('./routes/user.routes');

require('dotenv').config({path:' .env'})
require('./db.js')
const {verifyUser, requireAuth}=require('./middleware/auth.middleware.js')
const cors =require('cors');
const app=express();
app.use(cors({origin:process.env.URL_CLIENT,credentials:true}));


app.use(bodyParser.json()) 
app.use(cookieParser())

// jwt 
app.get('*',verifyUser)
app.get('/jwtid',requireAuth,(req,res)=>{
    res.status(201).send(res.locals.user._id);
})
//Les routes 
app.use('/api/user',userRoutes);
// lancement du server
app.listen(process.env.PORT,() => {
    console.log("Serveur actif ... "+process.env.PORT+" port")
})