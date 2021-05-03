import { ADD_QUESTION, GET_QUESTIONS } from "../actions/questions";
import { GET_ALL, SUBMIT_ANSWER } from "../actions/shared";

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

        case SUBMIT_ANSWER:
            const { questionID, selectedOption, userID } = action
            return {
                ...state,
                [questionID]: {
                    ...state[questionID],
                    [selectedOption]: {
                        ...state[questionID][selectedOption],
                        votes: state[questionID][selectedOption].votes.concat([userID])
                    }
                }
            }
        default:
            return state
    }
} 