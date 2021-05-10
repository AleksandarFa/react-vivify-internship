import { combineReducers } from "redux";
import todo from "./fetchReducer";

const rootReducer = combineReducers({ todo });

export default rootReducer;
