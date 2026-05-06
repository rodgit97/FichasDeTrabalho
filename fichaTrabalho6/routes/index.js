var express = require("express");//importação do módulo express, que é um framework para construir aplicações web em Node.js. O módulo express fornece uma série de funcionalidades e recursos para facilitar o desenvolvimento de servidores web e APIs RESTful.
var router = express.Router();//criação de um objeto router usando a função express.Router(). O router é um objeto que permite definir rotas e manipuladores de requisições para diferentes caminhos e métodos HTTP. Ele é usado para organizar as rotas da aplicação em módulos separados, facilitando a manutenção e a escalabilidade do código.

/* GET home page. */
router.get("/", function (req, res, next) {//definição de uma rota para o caminho "/" usando o método GET. Quando uma requisição GET é feita para o caminho "/", a função de callback é executada, recebendo os objetos req (requisição), res (resposta) e next (função para passar o controle para o próximo middleware). Dentro da função de callback, a resposta é enviada usando res.render(), que renderiza a view "index" e passa um objeto com a propriedade title definida como "Express". Isso significa que quando um cliente acessar a raiz do servidor, ele verá a página renderizada com o título "Express".
  res.render("index", { title: "Express" });
});

// app.get("/", function (req, res) {
//   res.send("root");
// });

// app.get("/user/:id", function (req, res) {
//   var userId = req.params.id;
//   res.send(userId);
// });

// app.get("/search", function (req, res, next) {
//   res.send(req.query);
// });

// app.get("/random.text", function (req, res) {
//   res.send("random.text");
// });

// app.get(/a/, function (req, res) {
//   res.send("/a/");
// });
module.exports = router;//exportação do objeto router para que ele possa ser utilizado em outros arquivos da aplicação. Ao exportar o router, ele pode ser importado e usado para definir as rotas da aplicação em um arquivo principal, como app.js, onde o servidor Express é configurado e iniciado. Isso permite que as rotas sejam organizadas em módulos separados, facilitando a manutenção e a escalabilidade do código da aplicação.
