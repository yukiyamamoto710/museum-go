const axios = require('axios');
const TOKEN = require('./config.js');

const config = {
  headers: {
    'X-Xapp-Token': TOKEN,
    'Accept': 'application/vnd.artsy-v2+json'
  }
}

const artistAPI = (artist, callback) => {
  axios.get(`https://api.artsy.net/api/artists/${artist}`, config)
    .then((res) => {
      callback(null, res.data);
    })
    .catch((err) => {
      callback(err);
    })
}

module.exports = artistAPI;

// artistAPI('andy-warhol', ()=>{});