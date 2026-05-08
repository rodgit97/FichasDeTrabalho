'use strict'; // habilitar o modo estrito do JavaScript para evitar erros comuns e melhorar a segurança do código

// const express = require('express'); --- IGNORE ---
// const app = express(); --- IGNORE ---
// const port = 3000; --- IGNORE ---

// app.listen(port, ()=>{
//   console.log("servidor");
// });

const fs = require('fs');// importar o módulo fs para trabalhar com o sistema de arquivos, necessário para ler os arquivos de modelo na pasta 'models'
const path = require('path');// importar o módulo path para trabalhar com caminhos de arquivos e diretórios, necessário para construir os caminhos dos arquivos de modelo na pasta 'models'
const Sequelize = require('sequelize');// importar o módulo Sequelize para trabalhar com o banco de dados usando o ORM Sequelize, necessário para criar a instância do Sequelize e definir os modelos de dados
const process = require('process');// importar o módulo process para acessar as variáveis de ambiente, necessário para obter as configurações do banco de dados a partir do arquivo 'config/config.json' e das variáveis de ambiente
const basename = path.basename(__filename);// obter o nome do arquivo atual (index.js) para filtrar os arquivos de modelo na pasta 'models' e evitar que o próprio arquivo seja processado como um modelo
const env = process.env.NODE_ENV || 'development';// obter o ambiente de execução a partir da variável de ambiente NODE_ENV ou usar 'development' como valor padrão, necessário para carregar as configurações corretas do banco de dados a partir do arquivo 'config/config.json' com base no ambiente de execução
const config = require(__dirname + '/../config/config.json')[env];// carregar as configurações do banco de dados a partir do arquivo 'config/config.json' usando o ambiente de execução para selecionar as configurações corretas, necessário para criar a instância do Sequelize com as configurações apropriadas para o ambiente de desenvolvimento, teste ou produção
const db = {};// criar um objeto vazio para armazenar os modelos de dados carregados a partir dos arquivos na pasta 'models', necessário para exportar os modelos e a instância do Sequelize para uso em outras partes da aplicação

let sequelize;// declarar a variável sequelize para armazenar a instância do Sequelize que será criada com base nas configurações do banco de dados carregadas a partir do arquivo 'config/config.json' e das variáveis de ambiente
if (config.use_env_variable) {// verificar se a configuração do banco de dados especifica o uso de uma variável de ambiente para obter as credenciais de conexão, necessário para criar a instância do Sequelize usando as credenciais fornecidas pela variável de ambiente
  sequelize = new Sequelize(process.env[config.use_env_variable], config);    // criar a instância do Sequelize usando as credenciais fornecidas pela variável de ambiente especificada na configuração do banco de dados, necessário para conectar ao banco de dados usando as credenciais fornecidas pela variável de ambiente
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
  // criar a instância do Sequelize usando as credenciais fornecidas diretamente na configuração do banco de dados (database, username, password), necessário para conectar ao banco de dados usando as credenciais fornecidas diretamente na configuração do banco de dados
}

fs // ler os arquivos na pasta 'models' usando o módulo fs para carregar os modelos de dados definidos em cada arquivo, necessário para definir os modelos de dados e suas associações com base nos arquivos de modelo na pasta 'models'
  .readdirSync(__dirname)// ler os arquivos na pasta 'models' de forma síncrona usando o método readdirSync do módulo fs, necessário para obter a lista de arquivos de modelo na pasta 'models' e processá-los um por um
  .filter(file => {// filtrar os arquivos para incluir apenas os arquivos de modelo válidos, ou seja, arquivos que não começam com '.' (para evitar arquivos ocultos), que não são o próprio arquivo index.js (para evitar processar o arquivo de configuração como um modelo) e que terminam com '.js' (para incluir apenas arquivos JavaScript), e que não contêm '.test.js' (para excluir arquivos de teste), necessário para garantir que apenas os arquivos de modelo válidos sejam processados e carregados como modelos de dados
    return (
      file.indexOf('.') !== 0 &&    // incluir apenas arquivos que não começam com '.' para evitar arquivos ocultos
      file !== basename && // incluir apenas arquivos que não são o próprio arquivo index.js para evitar processar o arquivo de configuração como um modelo
      file.slice(-3) === '.js' && // incluir apenas arquivos que terminam com '.js' para incluir apenas arquivos JavaScript
      file.indexOf('.test.js') === -1 // excluir arquivos que contêm '.test.js' para evitar carregar arquivos de teste como modelos de dados
    );
  })
  .forEach(file => { // para cada arquivo de modelo válido, importar o modelo usando a função require e a função de definição do modelo exportada pelo arquivo, e armazenar o modelo no objeto db usando o nome do modelo como chave, necessário para definir os modelos de dados e suas associações com base nos arquivos de modelo na pasta 'models' e para exportar os modelos para uso em outras partes da aplicação
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes); 
    // importar o modelo usando a função require e a função de definição do modelo exportada pelo arquivo, passando a instância do Sequelize e os tipos de dados do Sequelize como argumentos para definir o modelo corretamente, necessário para criar a definição do modelo com base no arquivo de modelo e para associar o modelo à instância do Sequelize
    db[model.name] = model;// armazenar o modelo no objeto db usando o nome do modelo como chave, necessário para exportar os modelos para uso em outras partes da aplicação e para permitir que os modelos sejam acessados por meio do objeto db
  });

Object.keys(db).forEach(modelName => {// para cada modelo definido no objeto db, verificar se o modelo possui uma função de associação (associate) e, em caso afirmativo, chamar a função de associação passando o objeto db como argumento para definir as associações entre os modelos, necessário para estabelecer as relações entre os modelos de dados com base nas definições de associação fornecidas em cada modelo
  if (db[modelName].associate) {// verificar se o modelo possui uma função de associação (associate) para definir as associações entre os modelos, necessário para estabelecer as relações entre os modelos de dados com base nas definições de associação fornecidas em cada modelo
    db[modelName].associate(db);// chamar a função de associação passando o objeto db como argumento para definir as associações entre os modelos, necessário para estabelecer as relações entre os modelos de dados com base nas definições de associação fornecidas em cada modelo
  }
});

db.sequelize = sequelize;// armazenar a instância do Sequelize no objeto db para exportar a instância e permitir que seja acessada em outras partes da aplicação, necessário para conectar ao banco de dados e realizar operações de banco de dados usando a instância do Sequelize
db.Sequelize = Sequelize;

module.exports = db;// exportar o objeto db contendo os modelos de dados e a instância do Sequelize para uso em outras partes da aplicação, necessário para permitir que os modelos de dados e a instância do Sequelize sejam acessados e utilizados em outras partes da aplicação para realizar operações de banco de dados e manipular os dados definidos pelos modelos
