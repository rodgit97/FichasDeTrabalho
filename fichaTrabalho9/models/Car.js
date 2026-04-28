// // const { DataTypes } = require("sequelize"); // importa o módulo DataTypes do Sequelize para definir os tipos de dados dos campos do modelo.
// // const sequelize = require("../config/database"); // importa a instância do Sequelize configurada para se conectar ao banco de dados.

// // const Car = sequelize.define(
// //   "Car",
// //   {
// //     // define o modelo "Car" usando o método define do Sequelize, especificando os campos e seus tipos de dados.
// //     Brand: {
// //       type: DataTypes.STRING, // define o campo "Brand" como uma string.
// //       allowNull: false, // especifica que o campo "Brand" não pode ser nulo.
// //     },
// //     Model: {
// //       type: DataTypes.STRING, // define o campo "Model" como uma string.
// //       allowNull: false, // especifica que o campo "Model" não pode ser nulo.
// //     },
// //     LicensePlate: {
// //       type: DataTypes.STRING, // define o campo "LicensePlate" como uma string.
// //       allowNull: false, // especifica que o campo "LicensePlate" não pode ser nulo.
// //       unique: true, // especifica que o campo "LicensePlate" deve ser único, ou seja, não pode haver dois carros com a mesma placa.
// //     },
// //     Color: {
// //       type: DataTypes.STRING, // define o campo "Color" como uma string.
// //     },
// //     Year: {
// //       type: DataTypes.INTEGER, // define o campo "Year" como um inteiro.
// //     },
// //     Power: {
// //       type: DataTypes.INTEGER, // define o campo "Power" como um inteiro.
// //     },
// //     Displacement: {
// //       type: DataTypes.INTEGER, // define o campo "Displacement" como um inteiro.
// //     },
// //   },
// //   {
// //     timestamps: false, // desativa os campos de timestamp (createdAt e updatedAt) para este modelo.

// //   },

// // );
// // app.sync(); // sincroniza o modelo com o banco de dados, criando a tabela "Cars" se ela ainda não existir

// // module.exports = Car; // exporta o modelo "Car" para que possa ser usado em outras partes da aplicação.

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Car = sequelize.define(
  "Car",
  {
    Brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LicensePlate: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Color: {
      type: DataTypes.STRING,
    },
    Year: {
      type: DataTypes.INTEGER,
    },
    Power: {
      type: DataTypes.INTEGER,
    },
    Displacement: {
      type: DataTypes.INTEGER, // Cilindrada costuma ser inteiro (ex: 1600)
    },
  },
  {
    tableName: "cars",
    timestamps: true,
  },
);

Car.validarMatricula = function (matricula) {
  const regex =
    /^([A-Z]{2}-\d{2}-\d{2}|\d{2}-\d{2}-[A-Z]{2}|\d{2}-[A-Z]{2}-\d{2}|[A-Z]{2}-\d{2}-[A-Z]{2})$/i;
  return regex.test(matricula);
};

module.exports = Car;

// //-------------------------------------------------
// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

// const Car = sequelize.define(
//   "Car",
//   {
//     Brand: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Model: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     LicensePlate: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     Color: {
//       type: DataTypes.STRING,
//     },
//     Year: {
//       type: DataTypes.INTEGER,
//     },
//     Power: {
//       type: DataTypes.INTEGER,
//     },
//     Displacement: {
//       type: DataTypes.FLOAT,
//     },
//   },
//   {
//     tableName: "cars",
//     timestamps: true,
//   },
// );

// Car.validarMatricula = function (matricula) {
//   const regex =
//     /^([A-Z]{2}-\d{2}-\d{2}|\d{2}-\d{2}-[A-Z]{2}|\d{2}-[A-Z]{2}-\d{2}|[A-Z]{2}-\d{2}-[A-Z]{2})$/i;
//   return regex.test(matricula);
// };

// module.exports = Car;