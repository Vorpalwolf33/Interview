import express from 'express';
import getQuestion from '../controllers/getQuestions.js';
import submitQuiz from '../controllers/submitQuiz.js';

const router = express.Router()

router.get("/quiz", getQuestion)
router.post('/submit', submitQuiz)

export default router;