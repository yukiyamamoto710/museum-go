const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/artists', (req, res) => {
  console.log(req.body);
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})