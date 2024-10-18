import React, { useEffect, useState } from 'react';
import { getNowPlayingMovies, getPopularMovies } from '../services/tmdbApi';
import MovieCard from '../components/MovieCard';

const Home: React.FC = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [popularPage, setPopularPage] = useState(1);

  useEffect(() => {
    async function fetchNowPlaying() {
      const response = await getNowPlayingMovies();
      setNowPlayingMovies(response.data.results.slice(0, 6));
    }

    async function fetchPopularMovies() {
      const response = await getPopularMovies();
      setPopularMovies(response.data.results.slice(0, 30));
    }

    fetchNowPlaying();
    fetchPopularMovies();
  }, []);

  const loadMorePopular = async () => {
    const response = await getPopularMovies(popularPage + 1);
    setPopularMovies([...popularMovies, ...response.data.results.slice(0, 6)]);
    setPopularPage(popularPage + 1);
  };

  const toggleFavorite = (movieId: number) => {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter((id) => id !== movieId));
    } else {
      setFavorites([...favorites, movieId]);
    }
  };

  return (
    <div className="bg-zinc-600">
      <h2 className="text-center p-10 text-xl text-white font-semibold">NOW PLAYING</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:columns-4 lg:columns-4 gap-8 m-10">
        {nowPlayingMovies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} posterPath={movie.poster_path} isFavorite={favorites.includes(movie.id)} onFavoriteToggle={() => toggleFavorite(movie.id)} />
        ))}
      </div>

      <h2 className="text-center mt-10 p-10 text-xl text-white font-semibold">POPULAR MOVIES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:columns-4 lg:columns-4 gap-8 m-10">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} posterPath={movie.poster_path} isFavorite={favorites.includes(movie.id)} onFavoriteToggle={() => toggleFavorite(movie.id)} />
        ))}
      </div>
      <button onClick={loadMorePopular} className="bg-slate-800 ml-10 m-2 text-white text-base font-semibold py-3 px-8 hover:bg-black">
        Load More
      </button>
    </div>
  );
};

export default Home;
