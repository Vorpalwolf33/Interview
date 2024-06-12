const QuestionCard = ({question, handleNext, value, handleSelectAnswer}) => {
    return (
        <div className="w-screen h-screen">
            <div className="w-[300px] h-full mx-auto flex flex-col justify-center">
                <div className="text-xl mb-5">{question.text}</div>
                <div>
                    {
                        question && question.options && Array.isArray(question.options) && question.options.map((option, index) => (
                            <div key={index} className={`hover:bg-gray-100 px-5 py-2 ${value === option?"bg-violet-200": ""}`}>
                                <label className="h-full w-full">
                                    <input type="radio" checked={value === option} onChange={() => handleSelectAnswer(option)}/>
                                    <span className="ms-3">{option}</span>
                                </label>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-5 text-center">
                    <button onClick={handleNext} className="bg-violet-500 px-5 py-2 text-white rounded-md">Next</button>
                </div>
            </div>
        </div>
    )
}  

export default QuestionCard;