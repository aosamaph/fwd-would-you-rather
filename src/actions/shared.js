import { _getQuestions, _getUsers } from "../API/_data"

export const GET_ALL = 'GET_ALL'

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

const getAll = (questions, users) => ({
    type: GET_ALL,
    questions,
    users
})
