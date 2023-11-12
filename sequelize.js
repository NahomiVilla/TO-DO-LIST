// sequelize.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('todolist', 'Solange', 'S251094v', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
