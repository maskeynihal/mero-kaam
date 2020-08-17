import axios from 'axios';

import config from 'Constants/config';

const http = axios.create({
  baseURL: config.baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: ''
  }
});

export default http;
