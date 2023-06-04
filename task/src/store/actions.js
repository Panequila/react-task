import axios from "axios";

// Action types
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

// Action creators
export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});

export const fetchMovies = (currentPage) => {
  return (dispatch) => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "10b7ce8d8c63be31db4beacebaccaab7",
          headers: { "Content-Type": "application.json" },
          page: currentPage,
        },
      })
      .then((response) => {
        const movies = response.data.results;
        dispatch({ type: FETCH_MOVIES_SUCCESS, payload: movies });
      })
      .catch((error) => {
        dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
      });
  };
};
