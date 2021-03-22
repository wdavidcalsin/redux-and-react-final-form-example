import { combineReducers } from "redux";
import { addReducer } from "./add.reducer";

export const rootReducer = combineReducers({ add: addReducer });
