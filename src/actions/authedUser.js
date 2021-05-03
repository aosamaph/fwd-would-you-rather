export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = (userID) => ({
    type: LOGIN,
    userID
})
export const logout = () => ({
    type: LOGOUT
})
