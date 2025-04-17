// components/MovieList.jsx
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
