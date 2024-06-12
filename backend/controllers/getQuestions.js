import Question from "../models/questions.js";

const getQuestion = async (req, res) => {
    try {
        const allQuestions = await Question.find().lean()
        if(!allQuestions) return res.status(500).json({success: false, message: "There was some error while fetching the questions"})
        return res.json({
            success: true,
            data: allQuestions,
        })
    } catch(err) {
        res.status(500).json({success: false, message: err.message})
    }

}

export default getQuestion;