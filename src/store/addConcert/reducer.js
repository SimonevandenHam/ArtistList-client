import { SEARCH_ARTIST } from "./action";

export default function(state = "", action = {}) {
  switch (action.type) {
    case SEARCH_ARTIST:
      return action.payload;
    default:
      return state;
  }
}
