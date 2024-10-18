import axios from 'axios';

const API_KEY = 'bf5c620609be7ee81953646e20ae1b88'; // Ganti dengan API key Anda
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getNowPlayingMovies = (page = 1) => tmdbApi.get(`/movie/now_playing`, { params: { page } });

export const getPopularMovies = (page = 1) => tmdbApi.get(`/movie/popular`, { params: { page } });
