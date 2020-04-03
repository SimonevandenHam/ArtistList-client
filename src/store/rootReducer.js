import { combineReducers } from "redux";
import signup from "./signUp/reducer";
import login from "./login/reducer";
import artistSearchResults from "./addConcert/reducer";
import artistList from "./artistList/reducer";
import concertDetail from "./concertDetail/reducer";

const rootReducer = combineReducers({
  signup,
  login,
  artistSearchResults,
  artistList,
  concertDetail
});

export default rootReducer;
