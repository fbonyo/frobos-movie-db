const API_KEY = "9430d8abce320d89568c56813102ec1d"; // your TMDB key
const BASE_URL = "https://api.themoviedb.org/3";

export async function searchTMDB(query) {
  if (!query) return [];
  const url = `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  const data = await res.json();

  return data.results.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    poster: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
    releaseDate: item.release_date || item.first_air_date,
    rating: item.vote_average,
    type: item.media_type,
    overview: item.overview,
  }));
}
