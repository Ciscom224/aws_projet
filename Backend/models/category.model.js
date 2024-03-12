const mongoose=require('mongoose');
const qSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
            unique:true,
        },
        questions: [{
            questionId: String,
            text: String,
            timestamp: Number,
            answers: [
                {
                    answerId: String,
                    text: String,
                    timestamp: Number,
                    
                }
            ]
        }]
    }
)