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

exports.editQuestion = (req,res)=>{

    Question.findByIdAndUpdate(req.params.id, {text:req.body.text},{new:true}, (err,data)=>{
        if(!err){
            res.send(data)
        }
    })
}

exports.deleteQuestion = (req,res)=>{
    Question.findByIdAndDelete(req.params.id,(err,data)=>{
        if(!err){
            res.send(data)
        }
    })
}