const connection = require("../config/connection.js");

const orm = {
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
          queryString += "VALUES (?)";
      
          connection.query(queryString, vals, function(err, result) {
            if (err) {
              reject(err);
            }
      
            resolve(result);
          });
      });
  },
  updateOne: function(table ,condition) {
      return new Promise((resolve,reject)=>{
          var queryString = "UPDATE " + table;
      
          queryString += " SET ";
          queryString += "devoured";
          queryString += "= true";
          queryString += " WHERE ";
          queryString += condition;
    
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


