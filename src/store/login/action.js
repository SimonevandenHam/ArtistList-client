import request from "superagent";

const baseUrl = "http://localhost:4000";

export const LOGIN = "LOGIN";

function login(payload) {
  return {
    type: LOGIN,
    payload
  };
}

export const userLogin = (email, password) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      console.log(response.body);
      const action = login(response.body.jwt);
      dispatch(action);
    })
    .catch(console.error);
};
