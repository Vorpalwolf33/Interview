import mongoose from 'mongoose';

const QuestionSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    options: {
        type: [{
            type: String,
            required: true,
        }],
        default: []
    },
    correctAnswer: {
        type: String,
        required: true,
    }
})

const Question = mongoose.model('question', QuestionSchema);

export default Question;