const Question = require('../models/questions')

exports.addQuestion = (req, res)=>{
    let question = new Question(req.body);
    question.save((err,data)=>{
        if(!err){
            res.send(data)
        }
    })


}

exports.getAllQuestions = (req,res)=>{
    Question.find({},(err,data)=>{
        res.send(data)
    } )
}