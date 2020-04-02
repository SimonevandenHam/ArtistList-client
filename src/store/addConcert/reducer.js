import {
  SEARCH_ARTIST,
  SELECT_ARTIST,
  CLEAR_SELECTED_ARTIST,
  CLEAR_SEARCHRESULT,
  NEW_CONCERT_INFORMATION,
  UPDATE_SELECTED_ARTIST
} from "./action";

const initialState = {
  artistSearchResult: null,
  selectedArtist: []
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_ARTIST:
      return {
        ...state,
        artistSearchResult: action.payload
      };
    case SELECT_ARTIST:
      return {
        ...state,
        selectedArtist: [...state.selectedArtist, action.payload]
      };
    case CLEAR_SELECTED_ARTIST:
      return { ...state, selectedArtist: [] };
    case CLEAR_SEARCHRESULT:
      return {
        ...state,
        artistSearchResult: null
      };
    case UPDATE_SELECTED_ARTIST:
      return { ...state, selectedArtist: action.payload };
    case NEW_CONCERT_INFORMATION:
      return state;
    default:
      return state;
  }
}
