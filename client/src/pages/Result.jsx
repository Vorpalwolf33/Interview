import { Navigate } from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom'

const Result = () => {
    const location = useLocation()
    console.log(location.state)

    return (location.state)?(
        <div className="w-screen h-screen">
            <div className="max-w-[300px] mx-auto flex flex-col justify-center h-full gap-10">
                <h2 className="text-4xl text-center font-bold">Quiz Result</h2>
                <div>
                    <h3 className="text-orange-600 text-2xl font-bold">Your Submitted Answers</h3>
                    {
                        location.state.answers.map((answer, index) => (
                            <div>
                                Question <span>{index + 1}</span>: Selected Option <span>{answer.selectedOption}</span>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Correct Answers</h3>
                    {
                        location.state.answers.map((answer, index) => (
                            <div>
                                Question <span>{index + 1}</span>: Selected Option <span>{answer.questionId.correctAnswer}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="text-center">

                    <Link to="/" className="bg-violet-500 text-white px-5 py-2 rounded-md">Home</Link>
                </div>
            </div>

        </div>
    ): <Navigate to="/"/>
}

export default Result;