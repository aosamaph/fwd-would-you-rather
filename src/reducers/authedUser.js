import { LOGIN, LOGOUT } from "../actions/users";

// Todo: remove hardcoded user
const initialState = 'johndoe'

export const authedUser = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return action.userID
        case LOGOUT:
            return ''
        default:
            return state
    }
} 