import { useState } from "react";

const API_KEY = "9430d8abce320d89568c56813102ec1d";

export default function SearchBar({ setMovies, setError }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchTMDB = async (query) => {
    if (!query) return [];
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      const data = await res.json();
      return data.results || [];
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchTMDB(searchTerm);
    if (results.length === 0) {
      setMovies([]);
      setError("No results found.");
    } else {
      setMovies(results);
      setError(null);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies or series..."
        className="px-4 py-2 border rounded flex-grow text-black"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-purple-700 rounded hover:bg-purple-800 transition"
      >
        Search
      </button>
    </form>
  );
}

