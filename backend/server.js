const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const connectSqlite = require('./config/connect');

dotenv.config();

connectSqlite();

const app = express();
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

const PORT = 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
