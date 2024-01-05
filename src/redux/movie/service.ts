import axiosInstance from '../../config/axiosConfig';

const fetchNowPlaying = async (page: number) => {
  const response = await axiosInstance.tmdbApi({
    url: `/movie/now_playing?page=${page}`,
    method: 'get',
    headers: {
      accept: 'application/json',
    },
  });

  return response.data;
};

const fetchPopular = async (page: number) => {
  const response = await axiosInstance.tmdbApi({
    url: `/movie/popular?page=${page}`,
    method: 'get',
    headers: {
      accept: 'application/json',
    },
  });

  return response.data;
};

const fetchTopRated = async (page: number) => {
  const response = await axiosInstance.tmdbApi({
    url: `/movie/top_rated?page=${page}`,
    method: 'get',
    headers: {
      accept: 'application/json',
    },
  });

  return response.data;
};

const fetchUpcoming = async (page: number) => {
  const response = await axiosInstance.tmdbApi({
    url: `/movie/upcoming?page=${page}`,
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
