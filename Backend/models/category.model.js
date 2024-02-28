const mongoose=require('mongoose');
const qSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
            unique:true,
        },
        questions: [{
            ID: {
                type: String,
            },
            content: {
                type: String,
            },
            anwers:[{
                ID:{
                    type:int,
                    unique:true,
                },
                content:{
                    type:String,
                }
            }]
        }]
    }
)