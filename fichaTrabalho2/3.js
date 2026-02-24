// function devolveVogais(str) {
//   let vogais = [
//     "a",
//     "e",
//     "i",
//     "o",
//     "u",
//     "A",
//     "E",
//     "I",
//     "O",
//     "U",
//     "á",
//     "é",
//     "í",
//     "ó",
//     "ú",
//     "Á",
//     "É",
//     "Í",
//     "Ó",
//     "Ú",
//     "à",
//     "è",
//     "ì",
//     "ò",
//     "ù",
//     "À",
//     "È",
//     "Ì",
//     "Ò",
//     "Ù",
//     "ã",
//     "õ",
//     "Ã",
//     "Õ",
//     "â",
//     "ê",
//     "î",
//     "ô",
//     "û",
//     "Â",
//     "Ê",
//     "Î",
//     "Ô",
//     "Û",
//     "ä",
//     "ë",
//     "ï",
//     "ö",
//     "ü",
//     "Ä",
//     "Ë",
//     "Ï",
//     "Ö",
//     "Ü",
//     "â",
//     "ê",
//     "î",
//     "ô",
//     "û",
//     "Â",
//     "Ê",
//     "Î",
//     "Ô",
//     "Û",
//     "ã",
//     "õ",
//     "Ã",
//     "Õ",
//   ];
//   let resultado = 0;
//   for (let letra of str) {
//     if (vogais.includes(letra)) {
//       resultado++;
//     }
//   }
//   console.log(resultado);
// }
// str= "Olá, tudo bem?";
// devolveVogais(str);

console.log("--------");

function contaVogais(frase) {
  let vogais = "aeiouAEIOUáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛãõÃÕ";
  let contador = 0;

  for (let letra of frase) {
    if (vogais.includes(letra)) contador++;
  }

  return contador;
}
let frase = "Hoje é domingo";
console.log("A frase: " + frase);
console.log("contém " + contaVogais(frase) + " vogais");
