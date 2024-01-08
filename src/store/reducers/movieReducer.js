import { movies } from "../../movies";
import { NEXT, PREV, RESTORE_MOVIE } from "../actions/movieActions";

const initialState = {
  movies: movies,
  sira: 0,
  disabledNav: "PREV",
};
function movieReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT:
      if (state.sira === state.movies.length - 2) {
        return {
          ...state,
          sira: state.sira + 1,
          disabledNav: "NEXT",
        };
      } else {
        return {
          ...state,
          sira: state.sira + 1,
          disabledNav: "NONE",
        };
      }
    case PREV:
      if (state.sira === 1) {
        return {
          ...state,
          sira: state.sira - 1,
          disabledNav: "PREV",
        };
      } else {
        return {
          ...state,
          sira: state.sira - 1,
          disabledNav: "NONE",
        };
      }
    default:
      return state;
  }
}
export default movieReducer;
