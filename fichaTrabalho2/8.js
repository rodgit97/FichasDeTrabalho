// // vamos implementar uma função onde o utilizador introduz
// // a altura e o comprimento de um retângulo.

// function caixaDesenho(height, width) {
//   for (let i = 0; i < height; i++) {
//     let linha = "";
//     for (let j = 0; j < width; j++) {
//       if ((i == 0 || i == height - 1 || j == 0 || j >= 0, j++)) {
//         let letter;
//       }
//     }
//     console.log(linha);
//   }
// }
// caixaDesenho(5, 10);

// console.log("--------verdadeira resposta-------");
// //por fazer
// function caixa(lado) {
//   for (let i = 0; i < lado; i++) {
//     linha = "";
//     for (let j = 0; j < lado; j++) {
//       if (i === 0 || i === lado - 1 || j === 0 || j === lado - 1) {
//         linha += "*".repeat(lado);
//       } else {
//         linha += "x" + " ".repeat(lado - 2) + "x";
//       }
//     }
//   }
//   console.log(linha);
// }

// caixa(6);

function caixa(lado) { // Função para desenhar uma caixa de asteriscos com base no lado fornecido, usando loops aninhados para construir cada linha da caixa, onde as bordas são compostas por asteriscos e o interior é preenchido com espaços
  for (let i = 0; i < lado; i++) { // Loop externo que itera de 0 até o valor do lado, controlando o número de linhas a serem desenhadas
    linha ="";
    for (let j = 0; j < lado; j++) { // Loop interno que itera de 0 até o valor do lado, controlando o número de caracteres a serem adicionados em cada linha
      if (i === 0 || i === lado-1 || j===0||j===lado -1) {// Verificar se a posição atual corresponde a uma borda da caixa (primeira linha, última linha, primeira coluna ou última coluna) usando condições if. Se for uma borda, adicionar um asterisco à linha usando concatenação de strings
        linha += "*";// Se a posição atual não for uma borda, adicionar um espaço à linha usando concatenação de strings para criar o interior vazio da caixa
      } else {
        linha += " ";// Adicionar um espaço à linha usando concatenação de strings para criar o interior vazio da caixa
      }
      
    }
    console.log(linha);
    
  } 

}
caixa(6);// Chamar a função caixa com o valor 6 para desenhar uma caixa de asteriscos de 6x6


function repeatCaixa(lado) { // Função para desenhar uma caixa de asteriscos com base no lado fornecido, usando o método repeat para construir cada linha de forma mais eficiente, onde as bordas são compostas por asteriscos e o interior é preenchido com espaços
  for (let i = 0; i < lado; i++) { // Loop que itera de 0 até o valor do lado, controlando o número de linhas a serem desenhadas
    linha = "";
    if (i===0|| i===lado-1) {// Verificar se a linha atual é a primeira ou a última linha da caixa usando condições if. Se for, construir a linha atual repetindo o caractere "*" a quantidade de vezes igual ao valor do lado usando o método repeat, o que cria uma borda sólida de asteriscos para a primeira e última linha da caixa
      linha = "*".repeat(lado);// Se a linha atual não for a primeira ou a última, construir a linha atual concatenando um asterisco, seguido por uma string de espaços repetida (lado - 2) vezes usando o método repeat para criar o interior vazio da caixa, e finalizando com outro asterisco para formar as bordas laterais da caixa

    }else{
      linha = "*" + " ".repeat(lado-2) + "*";// Construir a linha atual concatenando um asterisco, seguido por uma string de espaços repetida (lado - 2) vezes usando o método repeat para criar o interior vazio da caixa, e finalizando com outro asterisco para formar as bordas laterais da caixa
    }
    console.log(linha);
  }
  
}
repeatCaixa(6); // Chamar a função repeatCaixa com o valor 6 para desenhar uma caixa de asteriscos de 6x6 usando o método repeat para construir as linhas de forma mais eficiente