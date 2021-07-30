const axios = require('axios');
const TOKEN = require('./config.js');

const config = {
  headers: {
    'X-Xapp-Token': TOKEN,
    'Accept': 'application/vnd.artsy-v2+json'
  }
};

const artistAPI = (artist) => {
  return axios.get(`https://api.artsy.net/api/artists/${artist}`, config)
};

module.exports = artistAPI;