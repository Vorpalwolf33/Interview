import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001"

export const getQuestions = async () => {
    try {
        const resp = await axios.get(`${baseURL}/api/quiz`)
        if(resp && resp.data) return {...resp.data}
        return {
            data: {
                success: false,
                message: "Some error while getting questions"
            }
        }
    } catch(err) {
        return {
            errRes: err
        }
    }
}