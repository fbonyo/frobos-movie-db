import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MovieCard from "./components/MovieCard.jsx";
import MovieRow from "./components/MovieRow.jsx";
import FeaturedPremium from "./components/FeaturedPremium.jsx";
import MovieModal from "./components/MovieModal.jsx";

const API_KEY = "9430d8abce320d89568c56813102ec1d";

function App() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);

  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const [showSearch, setShowSearch] = useState(false);

  // Modal state
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchCategory = async (url, setState) => {
          const res = await fetch(url);
          const data = await res.json();
          setState(data.results);
        };

        await fetchCategory(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
          setPopular
        );

        await fetchCategory(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
          setTopRated
        );

        await fetchCategory(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
          setUpcoming
        );
      } catch {
        setError("Failed to load movies.");
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">

      {/* NAVBAR */}
      <Navbar onSearchToggle={() => setShowSearch(prev => !prev)} />

      {/* SEARCH BAR */}
      {showSearch && (
        <SearchBar
          value={searchMovies.query}
          onChange={async (query) => {
            if (!query.trim()) return setSearchMovies([]);

            try {
              const res = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
              );
              const data = await res.json();
              setSearchMovies(data.results || []);
            } catch {
              setError("Search failed.");
            }
          }}
          onClear={() => setSearchMovies([])}
        />
      )}

      <main className="px-4 sm:px-8 lg:px-12 pb-20">

        {/* CLICKABLE PREMIUM FEATURED SECTION */}
        {popular.length > 0 && (
          <FeaturedPremium
            movies={popular}
            onMovieClick={(movie) => setSelectedMovie(movie)}
          />
        )}

        {/* ERROR */}
        {error && <p className="mt-6 text-red-500">{error}</p>}

        {/* SEARCH RESULTS */}
        {searchMovies.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {searchMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <>
            <MovieRow
              title="Popular Movies"
              movies={popular}
              onMovieClick={(m) => setSelectedMovie(m)}
            />
            <MovieRow
              title="Top Rated Movies"
              movies={topRated}
              onMovieClick={(m) => setSelectedMovie(m)}
            />
            <MovieRow
              title="Upcoming Movies"
              movies={upcoming}
              onMovieClick={(m) => setSelectedMovie(m)}
            />
          </>
        )}
      </main>

      {/* MOVIE MODAL */}
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />

    </div>
  );
}

export default App;






