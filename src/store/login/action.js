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
      sessionStorage.setItem("jwtToken", response.body.jwt);
      const action = login(response.body.jwt);
      dispatch(action);
    })
    .catch(console.error);
};

export const LOGOUT = "LOGOUT";

function logout(payload) {
  return {
    type: LOGOUT,
    payload
  };
}

export const userLogout = () => (dispatch, getState) => {
  sessionStorage.removeItem("jwtToken");
  const action = logout(null);
  dispatch(action);
};
