import {UserActionTypes} from "./actionTypes";

interface IFetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface IFetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface IFetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UsersAction = IFetchUsersAction
    | IFetchUsersSuccessAction
    | IFetchUsersErrorAction