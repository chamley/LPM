const mongoose = require('mongoose');
const DB_PORT = 27017;
const DB_NAME = 'market';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/market";

mongoose.connect(
  DATABASE_URL,
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
