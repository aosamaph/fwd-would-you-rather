import { GET_ALL, SUBMIT_ANSWER } from "../actions/shared"
import { GET_USERS } from "../actions/users"

const initialState = {}

export const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
            return action.users

        case GET_USERS:
            return action.users

        case SUBMIT_ANSWER:
            return {
                ...state,
                [action.userID]: {
                    ...state[action.userID],
                    answers: {
                        ...state[action.userID].answers,
                        [action.questionID]: action.selectedOption
                    }
                }
            }

        default:
            return state
    }
} 