const filterData = (data, filterBy, filterValue) => {
  if (!filterBy || !filterValue) return data;
  return data.filter(item => item[filterBy] == filterValue);
};

const sortData = (data, sortBy) => {
  if (!sortBy) return data;
  return data.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
};

module.exports = { filterData, sortData };
