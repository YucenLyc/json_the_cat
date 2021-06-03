const request = require('request');

const breedFetcher = (breedName, callback) => {
  // const url = `https://api.thecatapi.com/v1/breeds/?${breedName}`;

  request(`https://api.thecatapi.com/v1/breeds/?${breedName}`, (error, response, body) => {
    //console.log(body);
    //console.log(typeof body);

    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);

    if (error) {
      return callback(error);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        return callback('Invalid Input');
      } else {
        return callback(null,data[0].description);
      }
    }
  
  });
};
module.exports = {breedFetcher};