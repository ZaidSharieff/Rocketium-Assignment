const express = require('express');
const router = express.Router();
const { getData } = require('../utils/dataHandler');
const { filterData, sortData } = require('../utils/dataProcessor');

router.get('/data', (req, res) => {
  const data = getData();
  if (!data) {
    return res.status(500).json({ error: 'Data not loaded yet. Please try again later.' });
  }

  const { sortBy, filterBy, filterValue } = req.query;

  let filteredData = filterData(data, filterBy, filterValue);
  let sortedData = sortData(filteredData, sortBy);

  res.json(sortedData);
});

module.exports = router;
