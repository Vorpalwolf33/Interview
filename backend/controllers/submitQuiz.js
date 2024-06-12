import Submission from "../models/submissions.js";
import Question from "../models/questions.js";

const submitQuiz = async (req, res) => {
    const {body} = req;
    if(!body.answers) return res.status(400).json({success: false, message: "Required Fields Not Present"});
    console.log(body)
    try {
        const allQuestions = await Question.find().lean()
        if(!allQuestions) return res.status(500).json({success: false, message: "Error while validating the answers"})
        if(body.answers.length < allQuestions.length) return res.status({success: false, message: "Please Answer All The Questions!!"})

        const submission = await Submission({...body})
        let result = await submission.save()
        if(!result) return res.status(500).json({success: false, message: "Some error occurred while trying to save the submission"})
        result = await Submission.findOne({_id: result._id}).populate({path: "answers", populate: "questionId"}).lean()
        if(!result) return res.status(500).json({success: false, message: "Some error occurred while trying to save the submission"})
        return res.json({
            success: true,
            message: "Successfully submitted the quiz!!",
            data: result
        })
    } catch(err) {
        res.status(500).json({success: false, message: err.message})
    }
}

export default submitQuiz;