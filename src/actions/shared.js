import { _getQuestions, _getUsers, _saveQuestionAnswer } from "../API/_data"

export const GET_ALL = 'GET_ALL'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'

export const handleInitialData = () => {
    return (dispatch) => {
        return _getQuestions()
            .then((questions) => {
                _getUsers().then((users) => {
                    dispatch(getAll(questions, users))
                })
            })
    }
}


export const handleSubmitAnswer = (questionID, selectedOption, userID) => {
    return (dispatch) => {
        return _saveQuestionAnswer({ authedUser: userID, qid: questionID, answer: selectedOption })
            .then((resp) => {
                dispatch(submitAnswer(questionID, selectedOption, userID))
            })
            .catch((err) => {
                console.log(err)
                alert('Error while submitting your vote. Please try again in a while')
            })
    }
}

const getAll = (questions, users) => ({
    type: GET_ALL,
    questions,
    users
})

const submitAnswer = (questionID, selectedOption, userID) => ({
    type: SUBMIT_ANSWER,
    questionID,
    selectedOption,
    userID
})