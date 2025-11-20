import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar.jsx";
import MovieCard from "./components/MovieCard.jsx";
import MovieRow from "./components/MovieRow.jsx";

const API_KEY = "9430d8abce320d89568c56813102ec1d";

function App() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);

  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchCategory = async (url, setState) => {
          const res = await fetch(url);
          const data = await res.json();
          setState(data.results);
        };

        await fetchCategory(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
          setPopular
        );

        await fetchCategory(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
          setTopRated
        );

        await fetchCategory(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
          setUpcoming
        );
      } catch (err) {
        setError("Failed to fetch movies.");
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Frobos Movie Database 🎬</h1>
      <SearchBar setMovies={setSearchMovies} setError={setError} />

      {error && <p className="mt-6 text-red-500">{error}</p>}

      {/* Show search results if available */}
      {searchMovies.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {searchMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <>
          <MovieRow title="Popular Movies" movies={popular} />
          <MovieRow title="Top Rated Movies" movies={topRated} />
          <MovieRow title="Upcoming Movies" movies={upcoming} />
        </>
      )}
    </div>
  );
}

export default App;
