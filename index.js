const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path=require('path');
const app = express();


const port = process.env.PORT || 5001;

app.listen(port,'0.0.0.0');

// pass the static files (react app) to the express app.
app.use(express.static(path.join(__dirname, './client/build')));

const API_URL = 'https://www.metaweather.com/api/location/';
// router and controller for cities list
app.get('/cities', (req, res) => {
  console.log('req.query.input ', req.query.input);
  axios.get(`${API_URL}search/?query=${req.query.input}`).then(
    data => {
      console.log('data ', data.data);
      res.status(200).send(data.data);
    },
    error => {
      res.status(500).json(error);
    }
  );
});

// router and controller for weather
app.get('/weather', (req, res) => {
  console.log('req.query.input ', req.query.input);
  axios.get(`${API_URL}${req.query.input}`).then(
    data => {
      console.log('data ', data.data);
      res.status(200).send(data.data);
    },
    error => {
      res.status(500).json(error);
    }
  );
});
