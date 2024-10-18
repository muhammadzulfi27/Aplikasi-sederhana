import React from 'react';

interface MovieCardProps {
  title: string;
  posterPath: string;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, posterPath, isFavorite, onFavoriteToggle }) => {
  return (
    <div className="movie-card text-white text-lg">
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
      <h3>{title}</h3>
      <button className="text-white bg-slate-800 p-2  hover:bg-black" onClick={onFavoriteToggle}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default MovieCard;
