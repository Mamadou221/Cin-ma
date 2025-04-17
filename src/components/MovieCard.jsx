// components/MovieCard.jsx
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 w-full sm:w-[300px]">
      <img src={movie.posterURL} alt={movie.title} className="h-48 w-full object-cover rounded mb-2" />
      <h2 className="text-xl font-bold">{movie.title}</h2>
      <p className="text-sm text-gray-700 mb-2">{movie.description}</p>
      <p className="text-yellow-500 font-semibold">Note : {movie.rating}/10</p>
    </div>
  );
};

export default MovieCard;
