import { legacy_createStore as createStore, combineReducers } from "redux";
import movieReducer from "./reducers/movieReducer";
import favoriteReducer from "./reducers/favoriteReducer";

const rootReducer = combineReducers({
  movieReducer,
  favoriteReducer,
});

const store = createStore(rootReducer);

export default store;
