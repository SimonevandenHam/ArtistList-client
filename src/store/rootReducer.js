import { combineReducers } from "redux";
import signup from "./signUp/reducer";
import login from "./login/reducer";
import artistSearchResults from "./addConcert/reducer";

const rootReducer = combineReducers({ signup, login, artistSearchResults });

export default rootReducer;
