const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('ficha10', 'root','',{
    host: 'localhost', dialect: 'mysql' 
});

module.exports = sequelize;