import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";

const rootReducer = combineReducers({ users: fetchReducer });

export default rootReducer;
