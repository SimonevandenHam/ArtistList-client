import { SEARCH_ARTIST, SELECT_ARTIST, CLEAR_SEARCHRESULT } from "./action";

const initialState = {
  artistSearchResult: null,
  selectedArtist: [],
 
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
    case CLEAR_SEARCHRESULT:
      return {
        ...state,
        artistSearchResult: null

      }
    default:
      return state;
  }
}
