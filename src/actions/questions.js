import { _getQuestions, _saveQuestion } from '../API/_data'

export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'
export const GET_QUESTIONS = 'GET_QUESTIONS'

export const handleGetQuestions = () => {
    return (dispatch) => {
        return _getQuestions()
            .then((res) => {
                dispatch(getQuestions(res))
            })
    }
}

export const handleAddQuestion = (question) => {
    return (dispatch) => {
        return _saveQuestion(question)
            .then((res) => {
                dispatch(addQuestion(res))
            })
            .catch((err) => {
                // this.setState(prevState)
                alert('Error occured, please try again in a while')
            })
    }
}

export const getQuestions = (questions) => ({
    type: GET_QUESTIONS,
    questions
})
const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question
})

// Todo: continue removeQuestion or remove it
// const removeQuestion = (questionID) => ({
//     type: REMOVE_QUESTION,
//     questionID
// })

