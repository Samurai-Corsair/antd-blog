import { combineReducers } from "redux";
import { bankReducer } from "../bank/reducer";
import { usersReducer } from "../users/reducer";
import { todosReducer } from "../todos/reducer";

const reducers = combineReducers({
  bank: bankReducer,
  users: usersReducer,
  todo: todosReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
