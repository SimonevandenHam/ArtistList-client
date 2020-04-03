import request from "superagent";

const baseUrl = "http://localhost:4000";

export const GET_CONCERT_DETAIL = "GET_CONCERT_DETAIL";

function getOneConcert(payload) {
  return {
    type: GET_CONCERT_DETAIL,
    payload
  };
}

export const getOneConcertInfo = data => (dispatch, getState) => {
  request
    .get(`${baseUrl}/concert/:concertId`)
    .then(response => {
      const action = getOneConcert(response.body);
      console.log(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
