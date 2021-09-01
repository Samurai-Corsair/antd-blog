import {Dispatch} from "react";
import {UserActionTypes} from "./actionTypes";
import {UsersAction} from "./actions";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try{
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e){
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'oops!'})
        }
    }
}