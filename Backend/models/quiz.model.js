const mongoose=require('mongoose');
const qSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
            unique:true,
        },
        questions: [{
            text: String,
            timestamp: Number,
            answers: [
                {
                    text: String,
                    timestamp: Number,
                    
                }
            ]
        }]
    }
)
const QuizModel = mongoose.model('Quiz', qSchema);

module.exports = QuizModel;