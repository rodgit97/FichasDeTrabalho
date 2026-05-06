function Person(first, last) {//definição de uma função construtora chamada Person que recebe dois parâmetros: first e last
    this.firstName= first;//atribuição do valor do parâmetro first à propriedade firstName do objeto criado
        this.lastName= last;//atribuição do valor do parâmetro last à propriedade lastName do objeto criado

}
Person.prototype.greet=function(){//definição de um método chamado greet no protótipo da função construtora Person
    console.log(`hello ${this.firstName} ${this.lastName} ${this.age}`);   //quando o método greet for chamado em um objeto criado a partir da função construtora Person, ele exibirá uma mensagem de saudação que inclui o nome completo do objeto e a idade (se a propriedade age estiver definida)
}

joao= new Person("joao", "mateus");//criação de um novo objeto da classe Person com o nome "joao" e sobrenome "mateus"
duarte= new Person("duarte", "costinha");

joao.greet()//chamada do método greet no objeto joao, o que exibirá a mensagem "hello joao mateus undefined" (a propriedade age não está definida, então é exibida como undefined)
duarte.greet()

Person.prototype.age= 30;//adiciona a propriedade age ao protótipo da função construtora Person e atribui o valor 30 a essa propriedade. Isso significa que todos os objetos criados a partir da função construtora Person terão acesso à propriedade age com o valor 30, a menos que seja sobrescrita por um valor específico para um objeto.

joao.greet()//chamada do método greet no objeto joao novamente, o que exibirá a mensagem "hello joao mateus 30" (agora a propriedade age está definida no protótipo, então é exibida como 30)
duarte.greet()

joao.age=23;//atribuição do valor 23 à propriedade age do objeto joao. Isso sobrescreve o valor da propriedade age que estava herdado do protótipo, então agora o objeto joao tem sua própria propriedade age com o valor 23, enquanto o objeto duarte ainda herda a propriedade age do protótipo com o valor 30.

joao.greet()//chamada do método greet no objeto joao novamente, o que exibirá a mensagem "hello joao mateus 23" (agora a propriedade age do objeto joao tem o valor 23, enquanto a propriedade age do objeto duarte ainda tem o valor 30 herdado do protótipo)
duarte.greet()

console.log(joao.__proto__);//  exibe o protótipo do objeto joao, que é o objeto Person.prototype. O protótipo é um objeto que contém as propriedades e métodos compartilhados por todos os objetos criados a partir da função construtora Person. Nesse caso, o protótipo contém a propriedade age com o valor 30 e o método greet.
console.log(duarte.__proto__);

