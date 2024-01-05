import axiosInstance from '../../config/axiosConfig';

const fetchNowPlaying = async () => {
  const response = await axiosInstance.tmdbApi({
    url: '/movie/now_playing',
    method: 'get',
    headers: {
      accept: 'application/json',
    },
  });

  return response.data;
};

const fetchPopular = async () => {
  const response = await axiosInstance.tmdbApi({
    url: '/movie/popular',
    method: 'get',
    headers: {
      accept: 'application/json',
    },
  });

  return response.data;
};

const fetchTopRated = async () => {
  const response = await axiosInstance.tmdbApi({
    url: '/movie/top_rated',
    method: 'get',
    headers: {
      accept: 'application/json',
    },
  });

  return response.data;
};

const fetchUpcoming = async () => {
  const response = await axiosInstance.tmdbApi({
    url: '/movie/upcoming',
    method: 'get',
    headers: {
      accept: 'application/json',
    },
  });

  return response.data;
};

const api = {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchUpcoming,
};

export default api;
