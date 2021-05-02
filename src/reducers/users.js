import { GET_ALL } from "../actions/shared"
import { GET_USERS } from "../actions/users"

const initialState = {}

export const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
            return action.users

        case GET_USERS:
            return action.users

        default:
            return state
    }
} 