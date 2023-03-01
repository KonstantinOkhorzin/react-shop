import axios from 'axios';

import { API_KEY, API_URL } from './config';

export const fetchFeaturedGoods = () => {
  return axios.get(API_URL, {
    headers: { Authorization: API_KEY },
  });
};


