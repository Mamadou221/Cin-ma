// App.jsx
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un voleur qui entre dans les rêves pour voler des secrets.",
      posterURL: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      rating: 9
    },
    {
      title: "Interstellar",
      description: "Un voyage dans l’espace pour sauver l’humanité.",
      posterURL: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      rating: 8
    }
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: ""
  });

  // Filtrage des films
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (ratingFilter === "" || movie.rating >= parseFloat(ratingFilter))
  );

  const handleAddMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      setMovies([...movies, { ...newMovie, rating: parseFloat(newMovie.rating) }]);
      setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-700">🎬 Mon Cinéma</h1>

      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      <div className="max-w-xl mx-auto my-4 p-4 bg-white rounded shadow-md space-y-3">
        <h2 className="text-xl font-bold text-gray-800">Ajouter un film</h2>
        <input
          type="text"
          placeholder="Titre"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="URL de l’affiche"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
          className="border p-2 w-full rounded"
        />
        <input
          type="number"
          placeholder="Note"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
          className="border p-2 w-full rounded"
          min="0"
          max="10"
        />
        <button
          onClick={handleAddMovie}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Ajouter
        </button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
