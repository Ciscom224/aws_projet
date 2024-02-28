const UserModel=require('../models/user.model');
const jwt=require('jsonwebtoken');

const maxDate =1 * 60 * 60 * 1000

// fonction pour la creation du token 
const createToken=(id)=>{

    return jwt.sign({id},process.env.TOKEN_SECRET,{
        expiresIn: maxDate, 
    })
} 
module.exports.signUp = async (req,res) =>{
    
    const {surName,email,password}=req.body

    console.log("request : ",req.body)
    try {
        const user= await  UserModel.create({surName,email,password})
        res.status(201).json({user:user._id})
    } catch (error) {
        res.status(200).json({error: error.message});
    }
}
module.exports.signIn=async (req,res)=>{
    
    const {email,password}=req.body;

    try {
        const user= await UserModel.login(email,password);
        const token=createToken(user._id);
        res.cookie('jwt',token,{httpOnly:true,maxDate}) // ajout du token JWT dans le cookie
        res.status(200).json({user:user._id})
    } catch (err) {
        console.log(err);
        res.json({message:err.message})
    }

}
module.exports.logout= async (req,res)=>{

   res.cookie('jwt','',{maxAge: 1 }); //suppression du token JWT dans le cookie  
   res.redirect("/") // le chemin de redirection apres la deconnexion
}

