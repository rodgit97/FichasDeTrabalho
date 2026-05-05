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

function contaVogais(frase) {// Função para contar o número de vogais em uma frase
  let vogais = "aeiouAEIOUáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛãõÃÕ";// String contendo todas as vogais
  let contador = 0;// Variável para contar o número de vogais encontradas na frase

  for (let letra of frase) {// Loop que percorre cada letra da frase usando for...of
    if (vogais.includes(letra)) contador++;// Verificar se a letra atual é uma vogal usando includes() e, se for, incrementar o contador
  }

  return contador; // Retornar o número total de vogais encontradas na frase para que possa ser usado posteriormente, se necessário 
}
let frase = "Hoje é domingo";
console.log("A frase: " + frase); // Imprimir a frase original usando concatenação de strings para formatar a mensagem
console.log("contém " + contaVogais(frase) + " vogais"); // Chamar a função contaVogais com a frase fornecida e imprimir o resultado usando concatenação de strings para formatar a mensagem
