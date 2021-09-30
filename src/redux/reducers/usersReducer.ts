import {CLEAR_USER, CREATE_USER, DELETE_USER, GET_USER, GET_USERS} from "../types";
import {User} from "../../pages/types";

const initialState = {
    users: [],
    user: {},
    loading: true
}

export default (state = initialState, action: any) => {
    switch (action.type){
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case CREATE_USER:
            return {
                ...state,
                loading: false
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((el: User) => el.id !== action.payload),
                loading: false
            }
        case CLEAR_USER:
            return {
                ...state,
                user: {},
                loading: false
            }
        default:
            return state
    }
}