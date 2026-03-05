//5
const events=require("./app5");
const Pessoa = require("./person2")
const Emitter = require("events");

const emitter = new Emitter();

emitter.on(events.USER_CREATED,
    ()=>console.log("Foi criado um utilizador"));
emitter.on(events.USER_CHANGED,
    ()=>console.log("Foi alterad um utilizador"));
emitter.on(events.USER_DELETED,
    ()=>console.log("Foi eliminado um utilizador"));

const jorjão= new Pessoa("jorjao","gomes");
emitter.emit(events.USER_CREATED)

emitter.emit(events.USER_DELETED)
