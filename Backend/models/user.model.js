const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const {isEmail}=require('validator');
const { text } = require('body-parser');

const userSchema= new mongoose.Schema(
    {
        surName:{
            type:String,
            require:true,
            minLength:5,
            maxLength:50,
            trim:true,
            unique:true
        },
        profilImage:{
            type:String,
            default:"./uploads/profils/ramdon-image.png"
        },
        email:{
            type:String,
            require:true,
            validate:[isEmail],
            lowerCase:true,
            trim:true,
            unique:true,
        },
        password:{
            type:String,
            require:true,
            max:1024,
            minLength:7,
            maxLength:15
        },
        friends:{
            type:[String]
        },
        messages: [{
            senderId: {
                type: String,
            },
            content: {
                type: String,
            }
        }],
        online:{
            type:Boolean,
            default:false
        }

    },
    {
        timestamps:true,
    }
);
// la fonction a executer avant la creation d'un utilisateur
userSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt();
    this.password= await bcrypt.hash(this.password, salt);
    next();
});
userSchema.statics.login=async function(email,password){
    const user= await this.findOne({email});
    console.log(user);
    if (user) {
        const auth=await bcrypt.compare(password,user.password);
        if (auth) {
            return user;
        }throw Error("mot de pass incorrect")
        
    }throw Error("pseudo incorrect");
}
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;