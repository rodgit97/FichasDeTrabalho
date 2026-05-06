let personna = {
  //objeto literal
  name: "andre",
  age: 21,
  gender: "male",
};

let string = JSON.stringify(personna); // converte o objeto em string

console.log(string); // exibe a string
console.log(personna);

//--------------------------------------
let newString = '{"name": "joana fagundes","age": 22,"gender":"F" }';// string no formato JSON

personna2 = JSON.parse(newString);// converte a string em objeto
console.log(newString);// exibe a string
console.log(personna2);
