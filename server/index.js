const express = require('express');
const app = express();
const PORT = 3000;

const artistAPI = require('./helper.js');
const getBio = require('../database/index.js');

app.use(express.json());

app.get('/artist', (req, res) => {
  const { artist } = req.query;
  let slug = artist.toLowerCase().replace(' ', '-');
  // this is deployement purposes only
  getBio(slug)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

/*
  *** if Artsy API is available, use the following code instead
  app.get('/artist', (req, res) => {
    const { artist } = req.query;
    let slug = artist.toLowerCase().replace(' ', '-');
    artistAPI(slug)
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      })
  })
*/