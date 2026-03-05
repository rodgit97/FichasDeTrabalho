let personna={
    name: "andre",
    age:21,
    gender:"male"
}

let string = JSON.stringify(personna);

console.log(string);
console.log(personna);

//--------------------------------------
let newString='{"name": "joana fagundes","age": 22,"gender":"F" }'

personna2= JSON.parse(newString);
console.log(newString);
console.log(personna2);


