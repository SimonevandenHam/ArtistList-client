import request from "superagent";
import baseUrl from "../../config";

export const ALL_CONCERT_OF_USER = "ALL_CONCERT_OF_USER";

function getConcert(payload) {
  return {
    type: ALL_CONCERT_OF_USER,
    payload,
  };
}

export const getAllUserConcerts = (jwt) => (dispatch, getState) => {
  request
    .get(`${baseUrl}/concerts`)
    .set("Authorization", `Bearer ${jwt}`)
    .then((response) => {
      console.log(response.body);
      const action = getConcert(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
