import axios from 'axios';

// baseUrl: https://api.currconv.com/api/v7/
// > convert?q=USD_PHP,PHP_USD&compact=ultra&apiKey=YOUR_API_KEY
// apiKey: ca15f95f374c652b5f93

const api = axios.create({
  baseURL: 'https://free.currencyconverterapi.com/api/v5',
});

export default api;
