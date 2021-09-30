import axios from "axios";
import {DELETE_USER, GET_USER, GET_USERS, USERS_ERROR} from "../types";
import {User} from "../../pages/types";

export const getUsers = () => async (dispatch: any) => {
    try {
        const res = await axios.get(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/`)
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e)
        })
    }
}

export const getUser = (id: string) => async (dispatch: any) => {
    try {
        const res = await axios.get(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}`)
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e)
        })
    }
}

export const createUser = (user: User, callback: () => void) => async (dispatch: any) => {
    try {
        await axios.post(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/`, user)

        callback()
    } catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e)
        })
    }
}

export const deleteUser = (id: number, callback?: () => void) => async (dispatch: any) => {
    try {
        await axios.delete(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}`)
        dispatch({
            type: DELETE_USER,
            payload: id
        })
        if (callback) {
            callback()
        }
    } catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e)
        })
    }
}

export const clearUser = () => (dispatch: any) => {
    dispatch({
        type: GET_USER
    })
}