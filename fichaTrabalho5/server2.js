// import
const express = require("express"); //express
const fs = require("fs"); //filesystem
// criar a minha app
const app = express();
// definir a porta
const port = 3000;//definição da porta em que o servidor irá escutar as requisições. Neste caso, a porta é definida como 3000, o que significa que o servidor estará acessível através do endereço http://localhost:3000 ou http://
const file = "persons.json";//definição do nome do arquivo JSON que será utilizado para armazenar os dados das pessoas. O arquivo "persons.json" será lido e escrito para persistir as informações das pessoas em formato JSON. Certifique-se de que esse arquivo exista no diretório do projeto ou que seja criado antes de executar o servidor, caso contrário, você pode receber um erro ao tentar ler ou escrever nesse arquivo.

// guardar pessoas em memória (variável global)
// let pessoas = null;
// let lastId = 0;

// função para ler o ficheiro
function lerPessoas() {//definição de uma função chamada lerPessoas que é responsável por ler os dados das pessoas a partir do arquivo JSON especificado pela variável file. A função utiliza o módulo fs para ler o conteúdo do arquivo de forma síncrona, utilizando a função readFileSync. O conteúdo lido é uma string no formato JSON, que é convertida em um objeto JavaScript usando a função JSON.parse. A função retorna a propriedade Data do objeto resultante, que contém os dados das pessoas armazenados no arquivo JSON.
  let dados = fs.readFileSync(file, "utf8");//leitura do conteúdo do arquivo especificado pela variável file, utilizando a função readFileSync do módulo fs. O conteúdo é lido como uma string no formato UTF-8 e armazenado na variável dados.
  return JSON.parse(dados).Data;//conversão da string JSON lida do arquivo em um objeto JavaScript usando a função JSON.parse. O resultado é um objeto que contém uma propriedade chamada Data, que é retornada pela função lerPessoas. A propriedade Data é onde os dados das pessoas estão armazenados no arquivo JSON.
}

function guardarPessoas(dados) {//  definição de uma função chamada guardarPessoas que é responsável por salvar os dados das pessoas no arquivo JSON especificado pela variável file. A função recebe um parâmetro chamado dados, que é o objeto JavaScript contendo os dados das pessoas a serem salvos. A função cria um novo objeto chamado dadosEscrita, que possui uma propriedade Data que armazena os dados das pessoas. Em seguida, a função utiliza a função writeFileSync do módulo fs para escrever o conteúdo do objeto dadosEscrita no arquivo JSON, convertendo-o para uma string JSON usando a função JSON.stringify.
  let dadosEscrita = { Data: dados };//criação de um novo objeto chamado dadosEscrita, que possui uma propriedade Data que armazena os dados das pessoas passados como parâmetro para a função guardarPessoas.
  fs.writeFileSync(file, JSON.stringify(dadosEscrita));//escrita do conteúdo do objeto dadosEscrita no arquivo JSON especificado pela variável file, utilizando a função writeFileSync do módulo fs. O objeto dadosEscrita é convertido para uma string JSON usando a função JSON.stringify antes de ser escrito no arquivo.
}

// middleware
app.use(express.json()); // middleware para fazer parse do body JSON

// rotas
// primeira rota
app.get("/", (req, res) => {
  res.send("Hello World");
});

//  /users      GET     empty         Show list of all the persons.
app.get("/users", (req, res) => {
  let pessoas = lerPessoas();
  res.send(pessoas);
});

//  /users      POST    JSON String   Add details of new person.
app.post("/users", (req, res) => {
  let pessoas = lerPessoas();
  //required
  const { firstname, lastname, gender, age, profession } = req.body;

  // validação
  if (!firstname || !lastname || !gender || !age || !profession) {
    res.status(400).send("Erro: O pedido não está no formato correto");
  }
  lastId++;
  pessoas.push({ id: lastId, firstname, lastname, gender, age, profession });

  guardarPessoas(pessoas);//chamada da função guardarPessoas para salvar os dados atualizados das pessoas no arquivo JSON após a adição de uma nova pessoa. A função guardarPessoas recebe o array pessoas atualizado como argumento, que contém a nova pessoa adicionada, e salva esses dados no arquivo JSON para garantir que as informações sejam persistidas.
  res.send(pessoas);//envia a resposta com o array atualizado de pessoas, incluindo a nova pessoa que foi adicionada. A resposta é enviada como um objeto JSON contendo os dados das pessoas, permitindo que o cliente que fez a requisição POST receba as informações atualizadas após a criação de uma nova pessoa.
});

//  /users/:id  DELETE  empty         Delete an existing person.
app.delete("/users/:id", (req, res) => {
  let pessoas = lerPessoas();
  const id = Number(req.params.id);//extração do parâmetro id da URL da requisição, convertendo-o para um número usando a função Number. O id é utilizado para identificar a pessoa que deve ser excluída do array de pessoas.

  // filtrar pessoas com id diferente do pedido
  const pessoas2 = pessoas.filter((p) => p.id !== id);//criação de um novo array chamado pessoas2, que é o resultado da filtragem do array pessoas. A função filter é utilizada para criar um novo array que contém apenas as pessoas cujo id é diferente do id extraído da URL. Isso significa que a pessoa com o id correspondente será excluída do array pessoas2.

  // verificar se alguma foi eliminada
  if (pessoas2.length === pessoas.length) { //verificação para determinar se a exclusão foi bem-sucedida. Se o comprimento do array pessoas2 for igual ao comprimento do array pessoas, isso significa que nenhuma pessoa foi excluída, ou seja, a pessoa com o id especificado não foi encontrada no array original. Nesse caso, a resposta é enviada com um status de erro 400 e uma mensagem indicando que a pessoa indicada não existe.
    res.status(400).send("Erro: A pessoas indicada não existe");
  } else {
    // pessoas = pessoas2;
    guardarPessoas(pessoas2);
    res.send(pessoas2);
  }
});

//  /users/:id  GET     empty         Show details of a person.
app.get("/users/:id", (req, res) => {
  let pessoas = lerPessoas();
  const id = Number(req.params.id);
  let pessoa = pessoas.filter((p) => p.id === id)[0];

  if (pessoa === undefined) {//verificação para determinar se a pessoa com o id especificado foi encontrada no array de pessoas. Se a variável pessoa for undefined, isso significa que a pessoa com o id correspondente não existe no array. Nesse caso, a resposta é enviada com um status de erro 400 e uma mensagem indicando que a pessoa indicada não existe.
    res.status(400).send("Erro: A pessoas indicada não existe");//verificação para determinar se a pessoa com o id especificado foi encontrada no array de pessoas. Se a variável pessoa for undefined, isso significa que a pessoa com o id correspondente não existe no array. Nesse caso, a resposta é enviada com um status de erro 400 e uma mensagem indicando que a pessoa indicada não existe.
  } else {
    res.send(pessoa);
  }
});
//  /users/:id  PUT     JSON String   Update details of a person.
app.put("/users/:id", (req, res) => {
  let pessoas = lerPessoas();
  const id = Number(req.params.id);

  // ir buscar a pessoa pelo id
  const pessoa = pessoas.filter((p) => p.id === id)[0];

  const { firstname, lastname, gender, age, profession } = req.body;
  // validação
  if (!firstname || !lastname || !gender || !age || !profession) {
    res.status(400).send("Erro: O pedido não está no formato correto");
  }

  if (pessoa === undefined) {//verificação para determinar se a pessoa com o id especificado foi encontrada no array de pessoas. Se a variável pessoa for undefined, isso significa que a pessoa com o id correspondente não existe no array. Nesse caso, a resposta é enviada com um status de erro 400 e uma mensagem indicando que a pessoa indicada não existe.
    res.status(400).send("Erro: A pessoas indicada não existe");
  } else {
    pessoa.firstname = firstname;
    pessoa.lastname = lastname;
    pessoa.gender = gender;
    pessoa.age = age;
    pessoa.profession = profession;

    guardarPessoas(pessoas);
    res.send(pessoa);
  }
});

// executar servidor.
app.listen(port, () => {
  // chamar a função que lê o ficheiro
  pessoas = lerPessoas();
  console.log("Lidas " + pessoas.length + " pessoas");
  // leio o id maximo
  lastId = Math.max(...pessoas.map((p) => p.id));
  console.log("ultimo ID lido: " + lastId);

  console.log(`Example app listening on port ${port}`);
  // console.log(pessoas);
});
