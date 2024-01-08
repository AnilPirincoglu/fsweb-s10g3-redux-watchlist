import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import movieReducer from "./reducers/movieReducer";
import favoriteReducer from "./reducers/favoriteReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  movieReducer,
  favoriteReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
