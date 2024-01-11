import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoriteActions";

const initialState = {
  favorites: [],
};
function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
export default favoriteReducer;
