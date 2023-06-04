import React from "react";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.map((movie) => (
        <div key={movie.id}>
          <h5>{movie.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
