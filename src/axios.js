import axios from './axios'

// create an axios instance from TMDb API
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
