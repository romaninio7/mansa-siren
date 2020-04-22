import axios from 'axios';

// Creating API to fetch a Mansa's data
export default axios.create({
  baseURL: 'https://kata.getmansa.com',
});
