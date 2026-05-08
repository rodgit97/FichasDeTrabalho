// const swaggerAutogen = require("swagger-autogen")(); // importa a biblioteca swagger-autogen para gerar a documentacao Swagger automaticamente.
// const outputFile = "./swagger_output.json"; //para criar o interface do swagger
// const endpointsFiles = ["./app.js"]; //para ler os endpoints do app.js

// swaggerAutogen(outputFile, endpointsFiles, doc); // gera a documentacao Swagger automaticamente, lendo os endpoints definidos em app.js e salvando a documentacao no arquivo swagger_output.json.

const swaggerAutogen = require('swagger-autogen')();// 

const doc = { // isto é 
  info: {
    title: 'API de Gestão Utilizadores',
    description: 'Documentação gerada automaticamente para a aula de Back-End'
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './swagger_output.json';
const endpointFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointFiles, doc);