import request from "superagent";

const baseUrl = "http://localhost:4000";

export const NEW_USER = "NEW_USER";

function newUser(payload) {
  return {
    type: NEW_USER,
    payload
  };
}

export const createUser = data => (dispatch, getState) => {
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      const action = newUser(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
