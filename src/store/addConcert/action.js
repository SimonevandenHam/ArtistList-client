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
      dispatch(searchArtist(response.body));
    })
    .catch(console.error);
};

//save slected artist
export const SELECT_ARTIST = "SELECT_ARTIST";

function selectedArtist(payload) {
  return {
    type: SELECT_ARTIST,
    payload
  };
}

export const selectArtist = artist => (dispatch, getState) => {
  dispatch(selectedArtist(artist));
};

//clear search result
export const CLEAR_SEARCHRESULT = "CLEAR_SEARCHRESULT";

function clearedSearchResult(payload) {
  return {
    type: CLEAR_SEARCHRESULT,
    payload
  };
}

export const clearSearchArtist = () => (dispatch, getState) => {
  dispatch(clearedSearchResult());
};
