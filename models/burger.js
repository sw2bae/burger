const orm = require("../config/orm");

const burger = {
    all: function() {
      return orm.selectAll("burgers");
    },
    create: function(cols, vals) {
      return orm.insertOne("burgers", cols, vals);
    },
    update: function(objCol, vals,condition) {
      return orm.updateOne("burgers", objCol, vals ,condition);
    }
  };

  module.exports = burger;