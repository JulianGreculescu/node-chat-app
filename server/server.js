const path = require('path');
const express = require('express');

require('./config/config');

const publicPath = path.join(__dirname, '../public');

var port = process.env.PORT || 3000;

var app = express();
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = {app};
