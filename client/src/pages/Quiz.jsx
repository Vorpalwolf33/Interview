import { useState, useEffect } from 'react';
import { getQuestions } from '../api/getQuestions';
import { toast } from 'react-toastify';
import QuestionCard from '../components/QuestionCard';
import { submitQuiz } from '../api/submitQuiz';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const navigate = useNavigate()
    const [questions, setQuestions] = useState([])
    const [stage, setStage] = useState(0)
    const [answers, setAnswers] = useState([])

    const fetchQuestions = async () => {
        try {
            const res = await getQuestions()
            console.log(res)
            if(res && res.success) {
                setQuestions(res.data)
                setAnswers(res.data.map(item => ({ questionId: item._id, selectedOption: ""})))
                setStage(0)
            }
        } catch(err) {
            toast.error(err.message)
        }
    }

    useEffect(() => {
        fetchQuestions()
    }, [])

    const handleNext = () => {
        if(!answers[stage].selectedOption) return toast.error("Please Select An Answer")
        setStage(state => {
            if(state <= questions.length - 1) return state + 1;
            else return state;
        })
    }

    const handlePrev = () => {
        setStage(state => {
            if(state > 0) return state - 1;
            else return state;
        })
    }

    const handleSelectAnswer = (answer) => {
        setAnswers(state => {
            const tempState = [...state]
            tempState[stage].selectedOption = answer;
            console.log(tempState)
            return tempState;
        })
    }

    const handleSubmitQuiz = async () => {
        try {
            const resp = await submitQuiz({answers})
            if(resp.success) {
                toast.success(resp.message + "\nRedirecting to result page...")
                console.log(resp)
                setTimeout(() => {
                    navigate("/result", {state: resp.data})
                }, 1000)
            } else toast.error(resp.message)
        } catch(err) {
            toast.error(err.message)
        }
        
    }

    return (
        <div>
            {
                stage < questions.length && questions[stage] && (
                    <QuestionCard 
                        question={questions[stage]}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        handleSelectAnswer={handleSelectAnswer}
                        value={answers[stage].selectedOption}
                    />
                )
            }
            {
                stage === questions.length && (
                    <div className="w-screen h-screen">
                        <div className="max-w-[300px] mx-auto flex flex-col justify-center gap-4 h-full">
                            {
                                questions.map((question, index) => (
                                    <div>
                                        Question <span>{index + 1}</span>: Selected Option {answers[index].selectedOption}
                                    </div>
                                ))
                            }
                            <div className="text-center">
                                <button onClick={handleSubmitQuiz} className="bg-violet-500 px-5 py-2 rounded-md text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Quiz;