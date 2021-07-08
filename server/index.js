const express = require('express');
const app = express();
const PORT = 8000;

const artistAPI = require('./helper.js');

app.use(express.json());

app.get('/artist', (req, res) => {
  const { artist } = req.query;
  let slug = artist.toLowerCase().replace(' ', '-');
  artistAPI(slug, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data)
    }
  });
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})