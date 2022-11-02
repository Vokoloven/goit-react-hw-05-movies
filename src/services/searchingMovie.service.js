import axios from 'axios';

const searchingMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  method: 'get',
  params: {
    api_key: '0a6b3e0f3263435d7fc5dc734c160ca5',
  },
});

export const getsearchingMovieApi = async params => {
  const response = await searchingMovie.get(`search/movie`, { params });

  const data = response.data.results;

  return data;
};
