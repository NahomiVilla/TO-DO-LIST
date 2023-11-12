// models/task.js
const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Task = sequelize.define('task', {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Task;
