import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001"

export const submitQuiz = async (data) => {
    try {
        const resp = await axios.post(`${baseURL}/api/submit`, data)
        if(resp && resp.data) return {...resp.data}
        return {
            data: {
                success: false,
                message: "Some error while submitting the quiz"
            }
        }
    } catch(err) {
        return {
            errRes: err
        }
    }
}