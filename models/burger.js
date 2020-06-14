const orm = require("../config/orm");

const burger = {
    all: function() {
      return orm.selectAll("burgers");
    },
    create: function(cols, vals) {
      return orm.insertOne("burgers", cols, vals);
    },
    update: function(condition) {
      return orm.updateOne("burgers",condition);
    }
  };

  module.exports = burger;