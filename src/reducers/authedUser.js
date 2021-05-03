import { LOGIN, LOGOUT } from "../actions/authedUser";

// Todo: remove hardcoded user
const initialState = ''

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