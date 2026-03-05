function Person(first, last) {
    this.firstName= first;
        this.lastName= last;

}
Person.prototype.greet=function(){
    console.log(`hello ${this.firstName} ${this.lastName} ${this.age}`);   
}

joao= new Person("joao", "mateus");
duarte= new Person("duarte", "costinha");

joao.greet()
duarte.greet()

Person.prototype.age= 30;

joao.greet()
duarte.greet()

joao.age=23;

joao.greet()
duarte.greet()

console.log(joao.__proto__);
console.log(duarte.__proto__);

