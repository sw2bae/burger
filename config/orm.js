var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput) {
    return new Promise((resolve,reject)=>{
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            reject(err);
          }
          resolve(result);
        });
    });
  },
  insertOne: function(table, cols, vals) {
      return new Promise((resolve,reject)=>{
          var queryString = "INSERT INTO " + table;
      
          queryString += " (";
          queryString += cols.toString();
          queryString += ") ";
          queryString += "VALUES (";
          queryString += vals.toString();
          queryString += ") ";
      
          console.log(queryString);
      
          connection.query(queryString, vals, function(err, result) {
            if (err) {
              reject(err);
            }
      
            resolve(result);
          });
      });
  },
  updateOne: function(table, objCol, vals ,condition) {
      return new Promise((resolve,reject)=>{
          var queryString = "UPDATE " + table;
      
          queryString += " SET ";
          queryString += objCol;
          queryString += "=";
          queryString += vals;
          queryString += " WHERE ";
          queryString += condition;
      
          console.log(queryString);
          connection.query(queryString, function(err, result) {
            if (err) {
              reject(err);
            }
            resolve(result);
          });
      });
  }
};

module.exports = orm;


