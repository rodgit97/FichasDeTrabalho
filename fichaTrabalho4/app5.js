//5
const events=require("./app5");//importação do ficheiro de eventos
const Pessoa = require("./person2")//importação do ficheiro pessoa2
const Emitter = require("events");//importação do módulo de eventos do node.js

const emitter = new Emitter();//criação de um novo emissor de eventos

emitter.on(events.USER_CREATED,//regista um ouvinte para o evento USER_CREATED
    ()=>console.log("Foi criado um utilizador"));//quando o evento for emitido, a função de callback será executada e exibirá a mensagem "Foi criado um utilizador"
emitter.on(events.USER_CHANGED,//regista um ouvinte para o evento USER_CHANGED
    ()=>console.log("Foi alterad um utilizador"));
emitter.on(events.USER_DELETED,//regista um ouvinte para o evento USER_DELETED
    ()=>console.log("Foi eliminado um utilizador"));

const jorjão= new Pessoa("jorjao","gomes");//criação de um novo objeto da classe Pessoa com o nome "jorjao" e sobrenome "gomes"
emitter.emit(events.USER_CREATED)//emite o evento USER_CREATED, o que fará com que a função de callback associada a esse evento seja executada e exiba a mensagem "Foi criado um utilizador"

emitter.emit(events.USER_DELETED)//emite o evento USER_DELETED, o que fará com que a função de callback associada a esse evento seja executada e exiba a mensagem "Foi eliminado um utilizador"
