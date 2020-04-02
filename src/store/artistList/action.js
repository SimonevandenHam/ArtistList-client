import request from "superagent";

const baseUrl = "http://localhost:4000";

export const ALL_EVENTS_OF_USER = "ALL_EVENTS_OF_USER";

const getEvents = event => ({
  type: ALL_EVENTS_OF_USER,
  payload: event
});

export const getAllUserEvents = userId => dispatch => {
  request
    .get(`${baseUrl}/concerts/${userId}`)
    .then(response => {
      console.log(response.body);
      dispatch(getEvents(response.body));
    })
    .catch(console.error);
};
