import axios from 'axios';

const movie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  method: 'get',
  params: {
    api_key: '0a6b3e0f3263435d7fc5dc734c160ca5',
  },
});

export const getMovieApi = async params => {
  const response = await movie.get(`movie/${params}`);

  const data = response.data;

  return data;
};
