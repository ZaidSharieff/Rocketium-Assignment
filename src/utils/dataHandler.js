const axios = require('axios');
const fs = require('fs');
const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';

let cachedData = null;

const initData = async () => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    // Store the data in a file
    fs.writeFile('./data/dummyData.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('Data fetched and stored successfully.');
    });

    // Store the data in memory
    cachedData = data;
  } catch (error) {
    console.error('Error fetching data:', error);
  };
}

const getData = () => {
  return cachedData;
};

module.exports = { initData, getData };
