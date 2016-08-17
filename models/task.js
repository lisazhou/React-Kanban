'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    created_by: DataTypes.STRING,
    assigned_to: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Task;
};