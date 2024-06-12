import mongoose, { Schema } from 'mongoose';

const SubmissionSchema = mongoose.Schema({
    answers: {
        type: [{
            questionId: {
                type: Schema.Types.ObjectId,
                ref: "question",
                required: true,
            },
            selectedOption: {
                type: String,
                required: true,
            }
        }]
    }
})

const Submission = mongoose.model('submission', SubmissionSchema)

export default Submission;