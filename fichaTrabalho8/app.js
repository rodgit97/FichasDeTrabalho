// // const express = require('express');
// // const mysql = require('mysql2');

// // const app = express();
// // const port = 3000;

// // // dados de ligação à BD
// // let pool = mysql.createPool({
// //     connectionLimit: 10,
// //     host: 'localhost',              //127.0.0.1
// //     user: 'root',
// //     password: 'root',
// //     database: 'Aula7.1'
// // })

// // app.use(express.json());    //middleware para ler json do body


// // // criar endpoints
// // // definir endppint com PATH, e CALLBACK (req, res) 
// // // req - request: dados enviados pelo cliente
// // // res - resposta: dados que devolvermos ao cliente
// // app.get('/users', (req,res) =>{
// //     // tratam o endpoint
// //     // res.status()
// //     // res.redirect()
// //     // res.download
// //     pool.query('SELECT * FROM users',(err,result)=>{
// //        if(err){
// //             return res.status(500).end(error);
// //        }
// //         res.json(result);
// //     });
// // });

// // app.listen(port,() => {
// //     console.log("Server Started");
// // });
// // const express = require("express");

// // const app = express();
// // const port = 2000;


// // app.listen(port, () => {
// //   console.log("servidor");
// // });

// // 1.a.
// const express = require('express');
// // 1.b. - no terminal: 
// //          npm init -y
// //          npm install express
// // 1.c. - no terminal:
// //          npm install mysql2
// // no mysql cli / wrokbench / phpMyAdmin
// // 2. CREATE DATABASE Aula7
// // 2.a. CREATE TABLE `users` (
// //            `id` INT NOT NULL AUTO_INCREMENT,
// //            `Firstname` VARCHAR(100) NOT NULL,
// //            `Lastname` VARCHAR(100) NOT NULL,
// //            `Profession` VARCHAR(100) NOT NULL,
// //            `Age` INT NOT NULL,
// //            PRIMARY KEY (`id`)
// //        );
// // 2.b.
// const host = 'localhost';
// const username = 'root';
// const password = '';
// const database = 'Aula7';
// // 2.c. INSERT INTO `users` (`Firstname`, `Lastname`, `Profession`, `Age`) VALUES
// //          ('João', 'Silva', 'Engenheiro', 28),
// //          ('Maria', 'Santos', 'Médica', 35),
// //          ('Pedro', 'Oliveira', 'Professor', 42),
// //          ('Ana', 'Costa', 'Advogada', 31),
// //          ('Rui', 'Ferreira', 'Designer', 26);
// // 3.
// const app = express();
// const port = 3000;

// //8
// //8.a
// const swaggerUi = require('swagger-ui-express');

// // 8.b
// // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger_output.json')));
// const swaggerDocs = require('./swagger_output.json');
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// // 4.
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: host,
//     user: username,
//     password: password,
//     database: database,
// });
// // 4.a
// connection.connect((err)=>{
//     if (err) {
//         console.error('Erro ao conectar ao MySQL:', err.message);
//         return;
//     }
//     console.log('connection established to MySql');
// });

// // middleware
// app.use(express.json()); // middleware para fazer parse do body JSON

// // rotas
// // 4.b.i
// app.get('/users',(req,res)=>{
//     const query = "SELECT * FROM users";
//     connection.query(query,(err,rows)=>{
//         if (err) {
//             console.error('Erro:', err.message);
//             return res.status(500).end("ocorreu um erro");
//         }
//         res.send(rows);

//     });
// })

// // 4.b.ii
// app.post('/users',(req,res)=>{

//     console.log(req.body);

//     const { Firstname, Lastname, Profession, Age } = req.body;
//     // const Firstname = req.body.Firstname;
//     const query = "INSERT INTO users "
//         + "(Firstname, Lastname, Profession, Age) "
//         + "VALUES (?, ?, ?, ?)";
//     connection.query(query,[Firstname, Lastname, Profession, Age],
//         (err,result)=>{
//         if (err) {
//             console.error('Erro:', err.message);
//             return res.status(500).end("ocorreu um erro");
//         }
//         res.json({ linhasAfetadas: result.affectedRows });
//     })
// });

// // 4.b.iii
// app.delete('/users',(req,res) => {
//     const { id } = req.body;

//     const query = "DELETE FROM users WHERE id = ?";

//     connection.query(query,[id],(err, result) =>{
//         if (err) {
//             console.error('Erro:', err.message);
//             return res.status(500).end("ocorreu um erro");
//         }
//         res.json({ linhasAfetadas: result.affectedRows });
//     });
// });

// // 4.b.iv
// app.delete('/users/:id',(req,res) => {
//     const id  = req.params.id;

//     const query = "DELETE FROM users WHERE id = ?";

//     connection.query(query,[id],(err, result) =>{
//         if (err) {
//             console.error('Erro:', err.message);
//             return res.status(500).end("ocorreu um erro");
//         }
//         res.json({ linhasAfetadas: result.affectedRows });
//     });
// });

// // 4.b.v
// app.get('/users/:id',(req,res) => {
//     const id = req.params.id;   //buscar id aos parametros
//     const query = "SELECT * FROM users WHERE id = ?";   //criar query

//     connection.query(query,[id],(err, result) =>{   //establecer ligação 
//         if (err) {  
//             console.error('Erro:', err.message);
//             return res.status(500).end("ocorreu um erro");
//         }

//         // caso não exista
//         if(!result.length){
//             return res.status(404).end("user não encontrado");
//         }

//         res.json({ resultado: result[0]});
//     });
// });

// // 4.b.vi
// app.get('/users/:age/:profession',(req,res) => {
//     const { age, profession } = req.params;
//     const query = "SELECT * FROM users WHERE Age = ? AND Profession = ?";  

//     connection.query(query,[age, profession],(err, result) =>{
//         if (err) {  
//             console.error('Erro:', err.message);
//             return res.status(500).end("ocorreu um erro");
//         }

//         // caso não exista
//         if(!result.length){
//             return res.status(404).end("não existem utilizadores com essa idade e profissão");
//         }
        
//         res.json({ resultado: result});
//     });
// });

// // 4.b.vii
// app.put('/users/:id',(req,res)=>{
//     const id = req.params.id;
//     const { Firstname, Lastname, Profession, Age } = req.body;

//     const query = "UPDATE users SET "
//         + "Firstname = ?,"
//         + "Lastname = ?,"
//         + "Profession = ?,"
//         + "Age = ? "
//         +"WHERE id = ?";

//     connection.query(query,[Firstname, Lastname, Profession, Age, id],(err, result) =>{
//         if (err) {  
//             console.error('Erro:', err.message);
//             return res.status(500).end("ocorreu um erro");
//         }

//         res.redirect('/users/' + id);
//     });    
// });

// app.listen(port, ()=>{
//     console.log("Server Started");
// });

const express = require('express');

// 3.a. Adicione as dependências para o swagger-autogen e o swagger-ui-express
// autogen não é necessário, apenas para geração do output (ficheiro swagger.js)
const swaggerUi = require('swagger-ui-express');

const host = 'localhost';
const username = 'root';
const password = '';
const database = 'Aula7';

const app = express();
const port = 3000;

// 3.b. Adicione o código necessário para utilizar o 
// swagger-ui-express como middleware
const swaggerDocs = require('./swagger_output.json');// importar o arquivo de documentação gerado pelo swagger-autogen para configurar o swagger-ui-express, necessário para fornecer a documentação da API usando o swagger-ui-express com base no arquivo de documentação gerado pelo swagger-autogen
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));// configurar o swagger-ui-express para servir a documentação da API no endpoint '/docs' usando o arquivo de documentação importado, necessário para fornecer a documentação da API usando o swagger-ui-express com base no arquivo de documentação gerado pelo swagger-autogen

const mysql = require('mysql2');

const connection = mysql.createConnection({// criar uma conexão com o banco de dados MySQL usando as credenciais fornecidas para conectar ao banco de dados e realizar operações de banco de dados usando a conexão estabelecida
    host: host,
    user: username,
    password: password,
    database: database,
});

connection.connect((err)=>{// conectar ao banco de dados MySQL e verificar se ocorreu algum erro durante a conexão para garantir que a conexão foi estabelecida com sucesso antes de realizar operações de banco de dados
    if (err) {// se houver um erro, exibir uma mensagem de erro no console e encerrar a função para evitar que o restante do código seja executado sem uma conexão válida
        console.error('Erro ao conectar ao MySQL:', err.message);// exibir a mensagem de erro no console para ajudar na depuração e identificação do problema de conexão
        return;// encerrar a função para evitar que o restante do código seja executado sem uma conexão válida, garantindo que as operações de banco de dados não sejam realizadas sem uma conexão estabelecida
    }
    console.log('connection established to MySql');
});

// middleware
app.use(express.json()); // middleware para fazer parse do body JSON

// rotas
app.get('/users',(req,res)=>{// definir uma rota GET para o endpoint '/users' que irá buscar todos os usuários do banco de dados MySQL usando a conexão estabelecida e enviar os registros obtidos como resposta para o cliente
    const query = "SELECT * FROM users";
    connection.query(query,(err,rows)=>{ 
        if (err) {
            console.error('Erro:', err.message);
            return res.status(500).end("ocorreu um erro");
        }
        res.send(rows);// 

    });
})

app.post('/users',(req,res) => { 
    const { Firstname, Lastname, Profession, Age } = req.body; // definir

    if( !Firstname || !Lastname || !Profession || !Age){
        return res.status(400).end("Dados obrigatórios em falta");
    }
    // const Firstname = req.body.Firstname;
    const query = "INSERT INTO users "
        + "(Firstname, Lastname, Profession, Age) "
        + "VALUES (?, ?, ?, ?)";
    connection.query(query,[Firstname, Lastname, Profession, Age],
        (err,result)=>{
        if (err) {
            console.error('Erro:', err.message);
            return res.status(500).end("ocorreu um erro");
        }
        res.json({ linhasAfetadas: result.affectedRows });
    })
});

app.delete('/users',(req,res) => {// 
    const { id } = req.body;

    const query = "DELETE FROM users WHERE id = ?";

    connection.query(query,[id],(err, result) =>{
        if (err) {
            console.error('Erro:', err.message);
            return res.status(500).end("ocorreu um erro");
        }
        res.json({ linhasAfetadas: result.affectedRows });
    });
});

app.delete('/users/:id',(req,res) => {
    const id  = req.params.id;

    const query = "DELETE FROM users WHERE id = ?";

    connection.query(query,[id],(err, result) =>{
        if (err) {
            console.error('Erro:', err.message);
            return res.status(500).end("ocorreu um erro");
        }
        res.json({ linhasAfetadas: result.affectedRows });
    });
});

app.get('/users/:id',(req,res) => {
    const id = req.params.id;   //buscar id aos parametros
    const query = "SELECT * FROM users WHERE id = ?";   //criar query

    connection.query(query,[id],(err, result) =>{   //establecer ligação 
        if (err) {  
            console.error('Erro:', err.message);
            return res.status(500).end("ocorreu um erro");
        }

        // caso não exista
        if(!result.length){
            return res.status(404).end("user não encontrado");
        }

        res.json({ resultado: result[0]});
    });
});

app.get('/users/:age/:profession',(req,res) => {//
    const { age, profession } = req.params;
    const query = "SELECT * FROM users WHERE Age = ? AND Profession = ?";  

    connection.query(query,[age, profession],(err, result) =>{
        if (err) {  
            console.error('Erro:', err.message);
            return res.status(500).end("ocorreu um erro");
        }

        // caso não exista
        if(!result.length){
            return res.status(404).end("não existem utilizadores com essa idade e profissão");
        }
        
        res.json({ resultado: result});
    });
});

app.put('/users/:id',(req,res)=>{//
    const id = req.params.id;
    const { Firstname, Lastname, Profession, Age } = req.body;

    const query = "UPDATE users SET "
        + "Firstname = ?,"
        + "Lastname = ?,"
        + "Profession = ?,"
        + "Age = ? "
        +"WHERE id = ?";

    connection.query(query,[Firstname, Lastname, Profession, Age, id],(err, result) =>{
        if (err) {  
            console.error('Erro:', err.message);
            return res.status(500).end("ocorreu um erro");
        }

        res.redirect('/users/' + id);
    });    
});

app.listen(port, ()=>{
    console.log("Server Started");
});