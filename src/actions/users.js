import { _getUsers } from "../API/_data"

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = (userID) => ({
    type: LOGIN,
    userID
})
export const logout = () => ({
    type: LOGOUT
})

export const GET_USERS = 'GET_USERS'
export const handleGetUsers = () => {
    return (dispatch) => {
        return _getUsers()
            .then((res) => {
                console.log(res)
                dispatch(getUsers(res))
            })
    }
}
export const getUsers = (users) => ({
    type: GET_USERS,
    users
})
