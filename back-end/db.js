const mongoose = require('mongoose');
const DB_PORT = 27017;
const DB_NAME = 'market';

mongoose.connect(
  `mongodb://localhost:${DB_PORT}/${DB_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(`😞 Sorry, something went wrong! ${err}`); // eslint-disable-line no-console
    } else {
      console.log(`🦆 Database (sessions) connected @ port ${DB_PORT}!`); // eslint-disable-line no-console
    }
  }
);

module.exports = mongoose;