// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {
  selectAll: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + `${tableInput}` + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table} (${cols}) VALUES ("${vals}")`;
    //console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function(table, cols, boolean, condition, cb) {
    let queryString = `UPDATE ${table} SET ${cols} = ${boolean.devoured} WHERE ${condition}`;
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err
      };
      cb(result);
    });
  },
  delete: function (table, condition, cb) {
    let queryString = `DELETE FROM ${table} WHERE ${condition}`;
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err
      };
      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
