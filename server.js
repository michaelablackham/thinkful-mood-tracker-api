const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.static('src/public'));
app.listen(process.env.PORT || 8080);

exports.app = app;
