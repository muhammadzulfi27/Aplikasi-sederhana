import React from 'react';
import MovieCard from '../components/MovieCard';

interface ProfileProps {
  favorites: number[];
  movies: any[];
}

const Profile: React.FC<ProfileProps> = ({ favorites, movies }) => {
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  return (
    <div>
      <h2>Your Favorite Movies</h2>
      <div className="movie-grid">
        {favoriteMovies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} posterPath={movie.poster_path} isFavorite={true} onFavoriteToggle={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
