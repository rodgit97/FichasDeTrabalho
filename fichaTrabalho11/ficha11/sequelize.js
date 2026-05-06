// Implement all the models and business logic using sequelize

const Sequelize = require('sequelize');
const UsersModel = require('./models/Users');

// Criação da ligação à BD
const sequelize = new Sequelize(process.env.DB_SCHEMA, 
    process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Users = UsersModel(sequelize, Sequelize);

// Autenticação à BD
sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    });

sequelize.sync({ force: false })
    .then(() => {
        console.log("Tables Created!");
    });

Users.create({email: 'dada@gmail.com', password:'12345678'});

module.exports = {
    Users
}
