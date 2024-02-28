const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

module.exports.verifyUser = (req, res,next) => {
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token,process.env.TOKEN_SECRET,async (err,decodedToken)=>{
            if(err){
                res.locals.user=null;
                res.cookie('jwt','',{maxAge:1});
                console.log("error : ",err)
                next();
            }
            else{
                console.log(decodedToken.id);
                let user = await UserModel.findById(decodedToken);
                console.log(user);
                next();
            }
        })
    }else {
        res.locals.user=null;
        console.log("token : ",token)
        next();
    }
}