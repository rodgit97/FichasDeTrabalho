class Pessoa {//definição de uma classe chamada Pessoa
  constructor(first, last) {//definição do método construtor da classe Pessoa, que recebe dois parâmetros: first e last
    this.firstName = first;//atribuição do valor do parâmetro first à propriedade firstName do objeto criado
    this.lasttName = last;
  }
}

module.exports = Pessoa;//exportação da classe Pessoa para que possa ser utilizada em outros arquivos do projeto, como o app5.js, onde é importada usando a função require.