import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import "./movie-details.css"
import axios from "axios";
import axiosInstance from "../../AxisConfig/instance";

const MovieDetails = () => {
  // useParams to get the id of the sent movie
  const params = useParams();

  // This time we are using a useState that's initialized with an object not an array, because we only get 1 movie
  const [movie, setMovie] = useState({});

  // Send the id to the API
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}`, {
        params: {
          api_key: "10b7ce8d8c63be31db4beacebaccaab7",
        },
      })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Movie id: {movie.id}</h1>
      <h1>Name: {movie.title}</h1>
      <h1>Release Date: {movie.release_date}</h1>
      <h1>Vote Average: {movie.vote_average}</h1>
      <h1>Vote Count: {movie.vote_count}</h1>

      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </div>
  );
};

export default MovieDetails;
