import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./movies.css";
import axios from "axios";
import axiosInstance from "../../AxisConfig/instance";

import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites, fetchMovies } from "../../store/actions";

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  //const [moviesDispatch, setMoviesDispatch] = useState([]);
  const moviesFromDispatch = useSelector((state) => state.movies);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios
  //     .get("https://api.themoviedb.org/3/movie/popular", {
  //       params: {
  //         api_key: "10b7ce8d8c63be31db4beacebaccaab7",
  //         headers: { "Content-Type": "application.json" },
  //         page: currentPage,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data.results);
  //       setMovies(response.data.results);
  //       console.log(movies);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [currentPage]);

  useEffect(() => {
    dispatch(fetchMovies(currentPage));
    // //setMovies(movies);
    // setMoviesDispatch(moviesx)
    // console.log(moviesx);
    // console.log(moviesDispatch);
  }, [currentPage, dispatch]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleAddToFavorites = (movie) => {
    dispatch(addToFavorites(movie));
  };

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  const handleFavorites = (item) => {
    if (favorites.find((movie) => movie.id === item.id)) {
      handleAddToFavorites(item);
      console.log("true");
    } else {
      console.log("false");
      handleRemoveFromFavorites(item);
    }
  };

  return (
    <div>
      <div className="container">
        {moviesFromDispatch.movies &&
          moviesFromDispatch.movies.map((item) => (
            <div key={item.id}>
              <h5>
                <Link to={`/details/${item.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                </Link>
                <button
                  onClick={() => handleFavorites(item)}
                  className={favorites.find((favorite) => favorite.id === item.id) ? "favorite" : ""}
                >
                  Favorite
                </button>
                <button onClick={() => handleRemoveFromFavorites(item.id)}>Remove</button>
              </h5>
            </div>
          ))}
      </div>
      <div className="pagination">
        {<button onClick={handlePrevPage}>Previous</button>}
        {<button onClick={handleNextPage}>Next</button>}
      </div>
    </div>
  );
};

export default Movies;
