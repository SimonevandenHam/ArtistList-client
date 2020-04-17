import request from "superagent";

import baseUrl from "../../config";

export const SEARCH_ARTIST = "SEARCH_ARTIST";

function searchArtist(payload) {
  return {
    type: SEARCH_ARTIST,
    payload,
  };
}

export const searchArtistResult = (artist) => (dispatch, getState) => {
  request
    .get(`${baseUrl}/spotify/${artist}`)
    .then((response) => {
      dispatch(searchArtist(response.body));
    })
    .catch(console.error);
};

//save slected artist
export const SELECT_ARTIST = "SELECT_ARTIST";

function selectedArtist(payload) {
  return {
    type: SELECT_ARTIST,
    payload,
  };
}

export const selectArtist = (artist) => (dispatch, getState) => {
  dispatch(selectedArtist(artist));
};

//clear selected artist
export const CLEAR_SELECTED_ARTIST = "CLEAR_SELECTED_ARTIST";

function clearArtist(payload) {
  return {
    type: CLEAR_SELECTED_ARTIST,
    payload,
  };
}

export const clearSelectedArtist = () => (dispatch, getState) => {
  dispatch(clearArtist());
};

//clear search result
export const CLEAR_SEARCHRESULT = "CLEAR_SEARCHRESULT";

function clearedSearchResult(payload) {
  return {
    type: CLEAR_SEARCHRESULT,
    payload,
  };
}

export const clearSearchArtist = () => (dispatch, getState) => {
  dispatch(clearedSearchResult());
};

//delete artist from selected artists
export const UPDATE_SELECTED_ARTIST = "UPDATE_SELECTED_ARTIST";

function updateArray(payload) {
  return {
    type: UPDATE_SELECTED_ARTIST,
    payload,
  };
}

export const updateSelectedArtistArray = (artistArray) => (
  dispatch,
  getState
) => {
  dispatch(updateArray(artistArray));
};

//post concert information
export const NEW_CONCERT_INFORMATION = "NEW_CONCERT_INFORMATION";

function newConcert(payload) {
  return {
    type: NEW_CONCERT_INFORMATION,
    payload,
  };
}

export const addConcert = (data, jwt) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/concert`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(data)
    .then((response) => {
      console.log("add concert action", response.body);
      const action = newConcert(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
