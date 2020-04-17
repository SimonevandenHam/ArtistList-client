import request from "superagent";

import baseUrl from "../../config";

export const NEW_USER = "NEW_USER";

function newUser(payload) {
  return {
    type: NEW_USER,
    payload,
  };
}

export const createUser = (data) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then((response) => {
      const action = newUser(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
