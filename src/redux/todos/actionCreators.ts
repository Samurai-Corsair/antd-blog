import {Dispatch} from "react";
import {TodosAction} from "./actions";
import axios from "axios";
import {TodosActionTypes} from "./actionTypes";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({ type: TodosActionTypes.FETCH_TODOS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: { _page: page, _limit: limit },
        }
      );
      setTimeout(() => {
        dispatch({
          type: TodosActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: TodosActionTypes.FETCH_TODOS_ERROR,
        payload: "error todos get",
      });
    }
  };
};

export const setTodoPage = (page: number): TodosAction => {
    return {
        type: TodosActionTypes.SET_TODO_PAGE,
        payload: page
    }
}