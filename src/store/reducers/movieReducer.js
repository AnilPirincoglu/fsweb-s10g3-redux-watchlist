import { movies } from "../../movies";
import { NEXT, PREV, RESTORE_MOVIE } from "../actions/movieActions";

const initialState = {
  movies: movies,
  sira: 0,
};
function movieReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT:
      if (state.length != state.sira + 2)
        return {
          ...state,
          sira: state.sira + 1,
        };
      return state;
    case PREV:
      return {
        ...state,
        sira: state.sira - 1,
      };
    default:
      return state;
  }
}
export default movieReducer;
