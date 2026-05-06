// import 
const express = require('express'); //express
const fs = require('fs');           //filesystem
// criar a minha app
const app = express(); //criação de uma nova aplicação Express, que é um framework para construir aplicações web em Node.js. A função express() retorna um objeto que representa a aplicação, e esse objeto é armazenado na variável app. A partir desse ponto, você pode usar o objeto app para definir rotas, middleware e outras funcionalidades da sua aplicação web.
// definir a porta
const port = 3000;//definição da porta em que o servidor irá escutar as requisições. Neste caso, a porta é definida como 3000, o que significa que o servidor estará acessível através do endereço http://localhost:3000 ou http://
const file = "persons.json";//definição do nome do arquivo JSON que será utilizado para armazenar os dados das pessoas. O arquivo "persons.json" será lido e escrito para persistir as informações das pessoas em formato JSON. Certifique-se de que esse arquivo exista no diretório do projeto ou que seja criado antes de executar o servidor, caso contrário, você pode receber um erro ao tentar ler ou escrever nesse arquivo.

// guardar pessoas em memória (variável global)
let pessoas = null;//declaração de uma variável global chamada pessoas, que inicialmente é definida como null. Essa variável será utilizada para armazenar os dados das pessoas em memória durante a execução do servidor. Posteriormente, essa variável será preenchida com os dados lidos do arquivo "persons.json" quando o servidor for iniciado, permitindo que as operações de leitura, criação, atualização e exclusão de pessoas sejam realizadas utilizando essa variável como fonte de dados temporária.
let lastId = 0; //declaração de uma variável global chamada lastId, que é inicializada com o valor 0. Essa variável será utilizada para manter o controle do último ID atribuído a uma pessoa. Sempre que uma nova pessoa for criada, o valor de lastId será incrementado e atribuído como ID único para essa nova pessoa. Isso garante que cada pessoa tenha um identificador exclusivo, facilitando as operações de leitura, atualização e exclusão de pessoas com base em seus IDs.

// função para ler o ficheiro
function lerPessoas(){
    let dados = fs.readFileSync(file, "utf8");
    return JSON.parse(dados).Data;
}

// middleware
app.use(express.json()); // middleware para fazer parse do body JSON

// rotas
// primeira rota
app.get('/', (req, res) => {
  res.send("Hello World");
});

//  /users      GET     empty         Show list of all the persons.
app.get('/users', (req, res) => {
  res.send(pessoas);
});

//  /users      POST    JSON String   Add details of new person. 
app.post('/users', (req, res) => {
  //required
    const { firstname, lastname, gender, age, profession } = req.body;

    // validação
    if (!firstname || !lastname || !gender || !age || !profession) {
      res.status(400).send("Erro: O pedido não está no formato correto");
    }
    lastId++;
    pessoas.push({ id: lastId, firstname, lastname, gender, age, profession });
    res.send(pessoas);
});

//  /users/:id  DELETE  empty         Delete an existing person.
app.delete('/users/:id', (req, res) => {
  const id = Number(req.params.id);

  // filtrar pessoas com id diferente do pedido
  const pessoas2 = pessoas.filter(p => p.id !== id);

  // verificar se alguma foi eliminada
  if(pessoas2.length === pessoas.length){
    res.status(400).send("Erro: A pessoas indicada não existe");  
  }
  else{
    pessoas = pessoas2;
    res.send(pessoas);
  }
});

//  /users/:id  GET     empty         Show details of a person.
app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  let pessoa = pessoas.filter(p => p.id === id)[0];

  if(pessoa === undefined){
    res.status(400).send("Erro: A pessoas indicada não existe");  
  }
  else{
    res.send(pessoa);
  }
});
//  /users/:id  PUT     JSON String   Update details of a person.
app.put('/users/:id',(req, res) => {
  const id = Number(req.params.id);

  // ir buscar a pessoa pelo id
  const pessoa = pessoas.filter(p => p.id === id)[0];
  
  const { firstname, lastname, gender, age, profession } = req.body;
  // validação
  if (!firstname || !lastname || !gender || !age || !profession) {
    res.status(400).send("Erro: O pedido não está no formato correto");
  }

  if(pessoa === undefined){
    res.status(400).send("Erro: A pessoas indicada não existe");  
  }
  else{

    pessoa.firstname = firstname;
    pessoa.lastname = lastname;
    pessoa.gender = gender;
    pessoa.age = age;
    pessoa.profession = profession;

    res.send(pessoa);
  }
});

// executar servidor.
app.listen(port, () => {
  // chamar a função que lê o ficheiro
  pessoas = lerPessoas();
  console.log("Lidas " + pessoas.length + " pessoas");
  // leio o id maximo
  lastId = Math.max(...pessoas.map(p => p.id));  
  console.log("ultimo ID lido: " + lastId);
  
  console.log(`Example app listening on port ${port}`);
  // console.log(pessoas);
})