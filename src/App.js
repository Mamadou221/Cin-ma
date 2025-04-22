import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

function App() {
  // Liste initiale des films (peut être vide)
  const [movies, setMovies] = useState([
    {
      title: "Superman",
      description: "Un reboot audacieux du célèbre super-héros, réalisé par James Gunn. Ce film marque une nouvelle ère pour le DC Universe, avec David Corenswet dans le rôle de Superman et Rachel Brosnahan en Lois Lane.",
      posterURL: "https://images.prismic.io/batman-escape/ZvvvWLVsGrYSwOCQ_Superman-legacy.webp?auto=format,compress",
      rating: 4.8
    },
    {
      title: "F1",
      description: "Brad Pitt incarne un pilote de Formule 1 vétéran qui fait son retour sur les circuits. Ce film promet des scènes de course spectaculaires et une immersion totale dans l'univers de la F1.",
      posterURL: "https://ai.dimaster.io/assets/cache/1920/960/media/Artikel/240713-F1-Movie-Brad-Pitt-2025/Apple-F1-Movie-Brad-Pitt-8.jpg",
      rating: 4.6
    },
    {
      title: "Interstellar",
      description: "Des explorateurs partent à la recherche d'un nouveau foyer pour l'humanité.",
      posterURL: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      rating: 4.7,
    },
  ]);

  // État pour gérer les filtres
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  // Fonction pour ajouter un nouveau film
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-sans">
      <h1 className="text-4xl font-bold text-center py-8 text-red-600 animate-pulse">🎬 CinéMAX</h1>
      {/* Composant filtre */}
      <Filter 
        setFilterTitle={setFilterTitle} 
        setFilterRating={setFilterRating} 
        onAddMovie={handleAddMovie} 
      />

      {/* Liste des films filtrés */}
      <MovieList 
        movies={movies.filter(
          (movie) =>
            movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
            movie.rating >= filterRating
        )} 
      />
    </div>
  );
}

export default App;
