import Config from 'react-native-config';

import urls from './urls';

const axios = require('axios').default;

const tmdbApi = axios.create({
  baseURL: urls.TMDB_REST_API_URL,
  headers: {
    Authorization: 'Bearer ' + Config.TMDB_BEARER_TOKEN,
  },
});

const axiosInstance = {
  tmdbApi,
};

export default axiosInstance;
