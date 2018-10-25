const axios = require('axios');

export const requestCity = userinput => {
  return axios.get('/cities', {
    params: {
      input: userinput
    }
  });
};

export const requestWeather = woeid => {
  return axios.get('/weather', {
    params: {
      input: woeid
    }
  });
};
