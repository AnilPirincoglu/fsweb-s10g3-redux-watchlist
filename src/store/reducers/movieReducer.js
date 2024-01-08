import { movies } from "../../movies";

const initialState = {
  movies: movies,
  sira: 0,
};
function movieReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
export default movieReducer;
