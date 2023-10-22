const db = require("mysql2");
require("dotenv").config({ path: "../.env" });

const pool = db
  .createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  .promise();

module.exports = pool;
