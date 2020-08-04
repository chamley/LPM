const express = require('express');

const cors = require('cors');
const app = express();
const SERVER_PORT =  3001;

const router = require('./router');

app.use(cors());

app.use(express.json());
app.use(router);

app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log(`😞 Sorry, something went wrong! ${err}`); // eslint-disable-line no-console
  } else {
    console.log(`🚀 Server (sessions) is listening on port ${SERVER_PORT}!`); // eslint-disable-line no-console
  }
});