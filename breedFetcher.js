const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  // const url = `https://api.thecatapi.com/v1/breeds/?${breedName}`;

  request(`https://api.thecatapi.com/v1/breeds/?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error, null);
    };

    const data = JSON.parse(body);

    if (data.length === 0) {
      return callback('Invalid Input');
    } else {
       callback(null,data[0].description);
      }
    })
   
  };

module.exports = {fetchBreedDescription};