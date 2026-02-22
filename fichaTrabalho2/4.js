// function toLowerCase(frase, letra) {
//   for (let i = 0; i < frase.length; i++) {
//     if (frase[i] === letra) {
//       console.log(frase[i].toLowerCase());
//     } else {
//       console.log(frase[i]);
//     }
//   }
// }

// frase = "Olá Mundo";
// toLowerCase(frase, "M");

console.log("--------verdadeira resposta-------");

function letraOcorre(frase, letra) {
  let contador = 0;

  for (let letraFrase of frase) {
    // não fazer distinção entre lower e upper case
    if (letraFrase.toLowerCase() == letra.toLowerCase()) contador++;
  }

  return contador;
}
function letraOcorreSplit(frase, letra) {
  return frase.toLowerCase().split(letra.toLowerCase()).length - 1;
}

let letra = "o";
let frase = "Hoje é domingo";
console.log(
  "A letra " +
    letra +
    " ocorre " +
    letraOcorre(frase, letra) +
    " vezes na frase: " +
    frase,
);

console.log(
  "A letra " +
    letra +
    " ocorre " +
    letraOcorreSplit(frase, letra) +
    " vezes na frase: " +
    frase,
);
