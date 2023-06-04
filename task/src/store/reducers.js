import { combineReducers } from "redux";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS } from "./actions";

// Favorites reducer
const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      return state.filter((movie) => movie.id !== action.payload);
    default:
      return state;
  }
};

const initialState = {
  movies: [], // Initialize movies as an empty array
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload, // Assign the fetched movies to the state
        error: null,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        movies: [], // Reset movies to an empty array on failure
        error: action.payload,
      };
    default:
      return state;
  }
};

// Root reducer
const rootReducer = combineReducers({
  favorites: favoritesReducer,
  movies: movieReducer,
});

export default rootReducer;
