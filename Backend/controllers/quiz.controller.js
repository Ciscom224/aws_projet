const QuizModel = require('../models/quiz.model');
const objID = require('mongoose').Types.ObjectId;

module.exports.getCategories = async (req,res)=>{
    const quiz = await QuizModel.find().select();
    res.status(200).json(quiz);
}

module.exports.getQuestions = async (req,res)=>{
    
}

module.exports.getQuestionsOf= async (req,res)=>{
    
}

module.exports.addCategory=async (req,res)=> {
    const {categoryName}=req.body
    console.log(req)
    try {
        const category= await  QuizModel.create({name:categoryName})
        res.status(201).json({category:category})
    } catch (err) {
        res.status(200).send(err.message);  
    }
}

module.exports.addQuestion=async (req,res)=> {
    console.log(req.body.answers)
    const question=req.body;

    try {
        const category = await QuizModel.findByIdAndUpdate(
            { _id: req.params.idCategory }, 
            { $push: { questions: { 
                text: question.text,
                timestamp: Date.now(),
                answers: question.answers.map(answer => ({
                    text: answer.text,
                    timestamp: Date.now()
                }))
            }}},
            { new: true, upsert: true }
        );
        res.send(category)
    } catch (err) {
        console.log(err);
    }
}