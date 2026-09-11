const express = require('express');
const app = express();

const port = 3000;

app.use('/', require('./routes/contacts'));

app.listen(process.env.PORT || port);
console.log('Web server running on port ' + (process.env.PORT || port));    