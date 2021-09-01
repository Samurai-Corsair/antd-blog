import {TodosActionTypes} from "./actionTypes";

interface IFetchTodosAction {
    type: TodosActionTypes.FETCH_TODOS;
}

interface IFetchTodosSuccessAction {
    type: TodosActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}

interface IFetchTodosErrorAction {
    type: TodosActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

interface ISetTodoPage {
    type: TodosActionTypes.SET_TODO_PAGE;
    payload: number
}

export type TodosAction = IFetchTodosAction
    | IFetchTodosSuccessAction
    | IFetchTodosErrorAction
    | ISetTodoPage