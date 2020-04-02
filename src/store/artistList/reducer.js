import { ALL_CONCERT_OF_USER } from "./action";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_CONCERT_OF_USER:
      return action.payload;
    default:
      return state;
  }
}
