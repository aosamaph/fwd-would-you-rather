import { ADD_QUESTION, GET_QUESTIONS } from "../actions/questions";
import { GET_ALL } from "../actions/shared";

const initialState = {}

export const questions = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
            return action.questions

        case GET_QUESTIONS:
            return action.questions

        case ADD_QUESTION:
            return {
                // Todo: check this deep copy
                ...state,
                [action.question.id]: { ...action.question }
            }
        default:
            return state
    }
} 