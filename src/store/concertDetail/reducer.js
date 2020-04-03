import { GET_CONCERT_DETAIL } from "./action";

export default function(state = [], action = {}) {
  switch (action.type) {
    case GET_CONCERT_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
