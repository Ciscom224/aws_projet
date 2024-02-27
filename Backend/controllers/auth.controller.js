const UserModel=require('../models/user.model');

module.exports.signUp = async (req,res) =>{
    
    const {fullName,email,password}=req.body

    console.log("request : ",req.body)
    try {
        const user= await  UserModel.create({fullName,email,password})
        res.status(201).json({user:user._id})
    } catch (error) {
        res.status(200).json({error: error.message});
    }
}

