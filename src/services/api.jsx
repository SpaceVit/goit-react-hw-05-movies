import axios from 'axios';

const BASE_URL = 'http://api.themoviedb.org/3/';
const API_KEY = 'f79920d6bdc281c9e2ec94ad5c996acc';

export const getTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/week?api_key=${API_KEY}`
  );

  return response.data.results;
};

export const serchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );

  return response.data.results;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);

  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );

  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );

  return response.data;
};
