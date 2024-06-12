import QuizImage from '../assets/quiz.jpg';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="bg-white w-screen h-screen flex flex-col justify-center">
            <div className="flex flex-row justify-center">
                <div>
                    <div className='max-w-screen w-[300px] h-auto'>
                        <img src={QuizImage} alt="Hero" className='w-full h-full'/>
                    </div>
                    <div className='text-center'>
                        <h2 className="text-4xl font-bold">Welcome To Quizzard</h2>
                        <p className="mb-5">Click on Start To Start checking your general knowledge</p>
                        <Link to="/quiz" className="bg-violet-500 px-5 py-2 text-white rounded-md">Start</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;