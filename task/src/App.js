import { Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./Components/movies/movies";
import MovieDetails from "./Components/movie-details/movie-details";
import FavoritesPage from "./Components/favorites/favorites";
import CustomNavbar from "./Components/navbar/navbar";

import { LanguageProvider } from "./Contexts/language";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <LanguageProvider value={{ language, setLanguage }}>
        <CustomNavbar></CustomNavbar>

        <Routes>
          <Route path="/" element={<Movies></Movies>}></Route>
          <Route path="/favorites" element={<FavoritesPage></FavoritesPage>}></Route>
          <Route path="/details/:id" element={<MovieDetails></MovieDetails>} />
        </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
