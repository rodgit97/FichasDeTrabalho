// const express = require("express");

// const app = express();
// const port = 2000;


// app.listen(port, () => {
//   console.log("servidor");
// });

// 1.a.
const express = require('express'); //importar o módulo express para criar o servidor web
// 1.b. - no terminal: 
//          npm init -y
//          npm install express
// 1.c. - no terminal:
//          npm install mysql2
// no mysql cli / wrokbench / phpMyAdmin
// 2. CREATE DATABASE Aula7
// 2.a. CREATE TABLE `users` (
//            `id` INT NOT NULL AUTO_INCREMENT,
//            `Firstname` VARCHAR(100) NOT NULL,
//            `Lastname` VARCHAR(100) NOT NULL,
//            `Profession` VARCHAR(100) NOT NULL,
//            `Age` INT NOT NULL,
//            PRIMARY KEY (`id`)
//        );
// 2.b.
const host = 'localhost';
const username = 'root';// substituir pelo nome de utilizador do MySQL, se for diferente de 'root'
const password = 'root';// substituir pela password do MySQL, se for diferente de 'root'
const database = 'Aula7';      // substituir pelo nome da base de dados criada, se for diferente de 'Aula7'

// 2.c. INSERT INTO `users` (`Firstname`, `Lastname`, `Profession`, `Age`) VALUES
//          ('João', 'Silva', 'Engenheiro', 28),
//          ('Maria', 'Santos', 'Médica', 35),
//          ('Pedro', 'Oliveira', 'Professor', 42),
//          ('Ana', 'Costa', 'Advogada', 31),
//          ('Rui', 'Ferreira', 'Designer', 26);

// 3.
const app = express();// criar uma aplicação express para configurar o servidor web
const port = 3000;// definir a porta onde o servidor irá escutar as requisições


// 4.
const mysql = require('mysql2');// importar o módulo mysql2 para conectar ao banco de dados MySQL

const connection = mysql.createConnection({// criar uma conexão com o banco de dados MySQL usando as credenciais fornecidas
    host: host,
    user: username,
    password: password,
    database: database,
});

// 4.a
connection.connect((err)=>{ // conectar ao banco de dados MySQL e verificar se ocorreu algum erro durante a conexão
    if (err) { // se houver um erro, exibir uma mensagem de erro no console e encerrar a função
        console.error('Erro ao conectar ao MySQL:', err.message); // exibir a mensagem de erro no console
        return;// encerrar a função para evitar que o restante do código seja executado
    }
    console.log('connection established to MySql');
});

// middleware
app.use(express.json()); // middleware para fazer parse do body JSON

// rotas
// 4.b.i
app.get('/users',(req,res)=>{// definir uma rota GET para o endpoint '/users' que irá buscar todos os usuários do banco de dados MySQL
    const query = "SELECT * FROM users";// definir a consulta SQL para selecionar todos os registros da tabela 'users'
    connection.query(query,(err,rows)=>{// executar a consulta SQL usando a conexão com o banco de dados MySQL e verificar se ocorreu algum erro durante a execução da consulta
        if (err) {// se houver um erro, exibir uma mensagem de erro no console e retornar uma resposta de erro para o cliente
            console.error('Erro:', err.message); // exibir a mensagem de erro no console
            return res.status(500).end("ocorreu um erro");// retornar uma resposta de erro com status 500 e uma mensagem indicando que ocorreu um erro
        }
        res.send(rows);// se a consulta for bem-sucedida, enviar os registros obtidos como resposta para o cliente

    });
})

// 4.b.ii
app.post('/users',(req,res)=>{// definir uma rota POST para o endpoint '/users' que irá inserir um novo usuário no banco de dados MySQL usando os dados fornecidos no corpo da requisição

    console.log(req.body);// exibir os dados recebidos no corpo da requisição no console para verificação

    const { Firstname, Lastname, Profession, Age } = req.body;// extrair os campos 'Firstname', 'Lastname', 'Profession' e 'Age' do corpo da requisição usando desestruturação de objetos para facilitar o acesso aos valores fornecidos pelo cliente
    // const Firstname = req.body.Firstname;
    const query = "INSERT INTO users "// construir a consulta SQL para inserir um novo registro na tabela 'users' usando os valores fornecidos pelo cliente
        + "(Firstname, Lastname, Profession, Age) "
        + "VALUES (?, ?, ?, ?)";
    connection.query(query,[Firstname, Lastname, Profession, Age],// executar a consulta SQL usando a conexão com o banco de dados MySQL, passando os valores extraídos do corpo da requisição como parâmetros para evitar problemas de injeção de SQL e verificar se ocorreu algum erro durante a execução da consulta
        (err,result)=>{// função de callback que será chamada após a execução da consulta SQL para verificar se ocorreu algum erro e enviar uma resposta adequada para o cliente
        if (err) {// se houver um erro, exibir uma mensagem de erro no console e retornar uma resposta de erro para o cliente
            console.error('Erro:', err.message);
            return res.status(500).end("ocorreu um erro");// retornar uma resposta de erro com status 500 e uma mensagem indicando que ocorreu um erro
        }
        res.json({ linhasAfetadas: result.affectedRows });// se a inserção for bem-sucedida, enviar uma resposta JSON contendo o número de linhas afetadas pela consulta para o cliente
    })
});


app.listen(port, ()=>{// iniciar o servidor web para escutar as requisições na porta definida e exibir uma mensagem no console indicando que o servidor foi iniciado com sucesso
    console.log("Server Started");
});
