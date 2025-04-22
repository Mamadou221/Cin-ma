// components/MovieCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

function MovieCard({ movie }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
    >
      <img src={movie.posterURL} alt={movie.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-red-500">{movie.title}</h2>
        <p className="text-sm text-gray-300 mb-2">{movie.description}</p>
        <span className="text-yellow-400 font-semibold">⭐ {movie.rating}/5</span>
      </div>
    </motion.div>
  );
}

export default MovieCard;
