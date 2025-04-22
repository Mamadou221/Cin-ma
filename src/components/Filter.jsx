// components/Filter.jsx
import React, { useState } from 'react';

function Filter({ setFilterTitle, setFilterRating, onAddMovie }) {
  const [titleInput, setTitleInput] = useState('');
  const [ratingInput, setRatingInput] = useState(0);
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: 0 });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 md:flex md:justify-between md:items-center gap-4 px-8">
      {/* Zone de filtre */}
      <div className="flex flex-col gap-2">
        <input 
          type="text" 
          placeholder="🔍 Rechercher par titre..."
          onChange={(e) => setFilterTitle(e.target.value)}
          className="p-2 rounded-md text-black"
        />
        <input 
          type="number" 
          placeholder=" Filtrer par note (ex: 4.5)"
          min="0" max="5" step="0.1"
          onChange={(e) => setFilterRating(parseFloat(e.target.value))}
          className="p-2 rounded-md text-black"
        />
      </div>

      {/* Formulaire d'ajout de film */}
      <div className="flex flex-col gap-2 mt-4 md:mt-0">
        <input name="title" type="text" placeholder="Titre du film" onChange={handleChange} className="p-2 rounded-md text-black" />
        <input name="description" type="text" placeholder="Description" onChange={handleChange} className="p-2 rounded-md text-black" />
        <input name="posterURL" type="text" placeholder="URL de l'affiche" onChange={handleChange} className="p-2 rounded-md text-black" />
        <input name="rating" type="number" placeholder="Note" onChange={handleChange} className="p-2 rounded-md text-black" min="0" max="5" step="0.1" />
        <button 
          onClick={() => onAddMovie(newMovie)}
          className="bg-red-600 hover:bg-red-700 transition-all text-white px-4 py-2 rounded-md font-semibold mt-2"
        >
          ➕ Ajouter un film
        </button>
      </div>
    </div>
  );
}

export default Filter;
