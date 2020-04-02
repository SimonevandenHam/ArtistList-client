import { combineReducers } from "redux";
import signup from "./signUp/reducer";
import login from "./login/reducer";
import artistSearchResults from "./addConcert/reducer";
import artistList from "./artistList/reducer";

const rootReducer = combineReducers({
  signup,
  login,
  artistSearchResults,
  artistList
});

export default rootReducer;
