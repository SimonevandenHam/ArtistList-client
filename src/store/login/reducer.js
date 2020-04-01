import { LOGIN, LOGOUT } from "./action";

const initialState = sessionStorage.getItem("jwtToken");

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return action.payload;
    default:
      return state;
  }
}
