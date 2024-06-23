'use strict';
const envConfig = require('dotenv').config({path: './.env'});
console.log(envConfig);
const mysql = require('mysql2');
//local mysql db connection
const dbConn = mysql.createConnection({
    host: envConfig.parsed.HOST,
    user: envConfig.parsed.USER,
    password: envConfig.parsed.PASSWORD,
    database: envConfig.parsed.DATABASE
  });
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;