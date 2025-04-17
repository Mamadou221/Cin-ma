// components/Filter.jsx
import React from "react";

const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 my-4 justify-center items-center">
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <input
        type="number"
        placeholder="Note minimale"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
        className="border p-2 rounded w-64"
        min="0"
        max="10"
      />
    </div>
  );
};

export default Filter;
