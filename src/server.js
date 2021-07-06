const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const pathToStatic = path.join(__dirname, '../dist');
app.use(express.static(pathToStatic));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
}); 