const { USER_CREATED, USER_CHANGED, USER_DELETED } = require("./config");//importação das constantes dos eventos relacionados com os utilizadores do ficheiro config.js

module.exports = {//definição de um objeto que contém as constantes dos eventos relacionados com os utilizadores
  USER_CREATED: "user_created",//constante para o evento de criação de utilizador
  USER_CHANGED: "user_changed",
  USER_DELETED: "user_deleted",
};
