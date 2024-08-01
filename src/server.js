const express = require('express');
const baseRouter = require('./routes/base');
const { initData } = require('./utils/dataHandler');
const app = express();
const PORT = process.env.PORT || 3000;

initData();

app.use(express.json());
app.use('/api', baseRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
