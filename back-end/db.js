const mongoose = require('mongoose');
const DB_PORT = 27017;
const DB_NAME = 'market';
// nothing to be scared about: process.env is just a file that is provided by heroku
// and it has a DATABASE_URL field which matches the one supplied by Atlas (the mongodb host)
// if this file doesn't exist (eg: running locally, then just use )
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
