var mysql = require("mysql");
var fs = require('fs');
var path = require('path');
require('dotenv').config();

var MAX_RECONNECT_COUNT = 3;
var RECONNECT_COUNT = 1;
var db = undefined;
var rates = undefined;

/** Mysql connection */
const connection = function () {
    try {
        let pool = undefined

        pool = mysql.createPool({
          connectionLimit : 10,
          host            : 'remotemysql.com',
          port: 3306,
          user            : 'j6zQXIyB22',
          password        : 'r8E4xAwtmU',
          database        : 'j6zQXIyB22'
        });
        
        pool.getConnection(function(err, connection) {
            if (err) {
                if (err.code === "PROTOCOL_CONNECTION_LOST") {
                  console.error("Database connection was closed.");
                }
                if (err.code === "ER_CON_COUNT_ERROR") {
                  console.error("Database has too many connections.");
                }
                if (err.code === "ECONNREFUSED") {
                  console.error("Database connection was refused.");
                }
              }

              console.log("db connected");
              if (connection) connection.release();
            
              return;
          });

        db = pool;
    } catch (error) {
        console.log("Mongodb Connection ===> Error", error);
    }
}

/** Get db instance */
const db_client = () => db;

const setRates = (value) => rates = value;

const getRates = () => rates;

module.exports = {
    connection,
    db_client,
    setRates,
    getRates
}