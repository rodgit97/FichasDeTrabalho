// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("ficha9", "root", "root", {
//   host: "localhost",
//   dialect: "mysql",
// });

// module.exports = sequelize; // exporta a instancia do Sequelize para que possa ser usada em outras partes da aplicacao.

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ficha9", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;