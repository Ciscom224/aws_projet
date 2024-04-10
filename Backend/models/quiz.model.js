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
            proposition: [
                {
                    text: String,
                    timestamp: Number,
                }
            ],
            answers: {
                type: [String]
            }
        }]
    }
)
const QuizModel = mongoose.model('Quiz', qSchema);

module.exports = QuizModel;