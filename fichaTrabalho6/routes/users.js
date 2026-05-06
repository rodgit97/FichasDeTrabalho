var express = require('express');//importação do módulo express, que é um framework para construir aplicações web em Node.js. O módulo express fornece uma série de funcionalidades e recursos para facilitar o desenvolvimento de servidores web e APIs RESTful.
var router = express.Router();//criação de um objeto router usando a função express.Router(). O router é um objeto que permite definir rotas e manipuladores de requisições para diferentes caminhos e métodos HTTP. Ele é usado para organizar as rotas da aplicação em módulos separados, facilitando a manutenção e a escalabilidade do código.

/* GET users listing. */
router.get('/', function(req, res, next) {//definição de uma rota para o caminho "/users" usando o método GET. Quando uma requisição GET é feita para o caminho "/users", a função de callback é executada, recebendo os objetos req (requisição), res (resposta) e next (função para passar o controle para o próximo middleware). Dentro da função de callback, a resposta é enviada usando res.send(), que envia a string 'respond with a resource' como resposta para o cliente que fez a requisição. Isso significa que quando um cliente acessar o caminho "/users" com uma requisição GET, ele receberá a mensagem 'respond with a resource' como resposta.
  res.send('respond with a resource');
});

module.exports = router;
