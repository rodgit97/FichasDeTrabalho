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
  // Função para contar o número de ocorrências de uma letra específica em uma frase, sem fazer distinção entre maiúsculas e minúsculas
  let contador = 0;

  for (let letraFrase of frase) {
    // Loop que percorre cada letra da frase usando for...of, armazenando a letra atual na variável letraFrase
    // não fazer distinção entre lower e upper case
    if (letraFrase.toLowerCase() == letra.toLowerCase()) contador++; // Verificar se a letra atual da frase, convertida para minúscula, é igual à letra fornecida, também convertida para minúscula, usando toLowerCase() para garantir que a comparação seja case-insensitive. Se for igual, incrementar o contador
  }

  return contador;
}
function letraOcorreSplit(frase, letra) {
  // Função para contar o número de ocorrências de uma letra específica em uma frase usando o método split para dividir a frase em partes com base na letra fornecida e contando o número de partes resultantes
  return frase.toLowerCase().split(letra.toLowerCase()).length - 1; // Converter a frase para minúscula usando toLowerCase(), dividir a frase em um array de partes usando split() com a letra fornecida (também convertida para minúscula) como delimitador, e retornar o número de partes resultantes menos 1, que corresponde ao número de ocorrências da letra na frase
}

let letra = "o"; // Letra para contar as ocorrências na frase
let frase = "Hoje é domingo"; // Frase na qual contar as ocorrências da letra fornecida
console.log(
  "A letra " +
    letra +
    " ocorre " +
    letraOcorre(frase, letra) +
    " vezes na frase: " +
    frase,
); // Chamar a função letraOcorre com a frase e a letra fornecidas, e imprimir o resultado usando concatenação de strings para formatar a mensagem

console.log(
  "A letra " +
    letra +
    " ocorre " +
    letraOcorreSplit(frase, letra) +
    " vezes na frase: " +
    frase,
);
