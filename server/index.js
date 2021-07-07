const express = require('express');
const app = express();
const PORT = 3000;

const artistAPI = require('./helper.js');

app.use(express.json());

app.get('/artist', (req, res) => {
  const { artist } = req.query;
  let slug = artist.toLowerCase().replace(' ', '-');
  artistAPI(slug, ()=>{});
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})