require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const PORT = 3001;
const port = process.env.PORT || PORT;

const pathToStatic = path.join(__dirname, '../dist');
app.use(express.static(pathToStatic));

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
}); 