import request from "superagent";

const baseUrl = "http://localhost:4000";

export const ALL_CONCERT_OF_USER = "ALL_CONCERT_OF_USER";

function getConcert(payload) {
  return {
    type: ALL_CONCERT_OF_USER,
    payload
  };
}

export const getAllUserConcerts = jwt => (dispatch, getState) => {
  request
    .get(`${baseUrl}/concerts`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => {
      const action = getConcert(response.body);
      console.log("response body", response.body);
      dispatch(action);
    })
    .catch(console.error);
};
