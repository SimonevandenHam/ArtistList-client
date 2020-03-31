import request from "superagent";

const baseUrl = "http://localhost:4000";

export const SEARCH_ARTIST = "SEARCH_ARTIST";

function searchArtist(payload) {
  return {
    type: SEARCH_ARTIST,
    payload
  };
}

export const searchArtistResult = artist => (dispatch, getState) => {
  request
    .get(`${baseUrl}/spotify/${artist}`)
    .then(response => {
      console.log(response.body);
      dispatch(searchArtist(response));
    })
    .catch(console.error);
};
