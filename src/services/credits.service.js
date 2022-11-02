import axios from 'axios';

const credits = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  method: 'get',
  params: {
    api_key: '0a6b3e0f3263435d7fc5dc734c160ca5',
  },
});

export const getCreditsApi = async params => {
  const response = await credits.get(`movie/${params}/credits`);

  const data = response.data.cast;

  return data;
};
