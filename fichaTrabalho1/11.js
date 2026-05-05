// //  ========================================
function calcularMaximo(numeros) {// Função para calcular o valor máximo em um array de números
  if (numeros.length === 0) return null;// Verificar se o array está vazio, retornando null se for o caso

  let maximo = numeros[0];// Inicializar a variável maximo com o primeiro elemento do array para começar a comparação
  for (let i = 1; i < numeros.length; i++) {// Loop que itera a partir do segundo elemento do array, comparando cada número com o valor atual de maximo
    if (numeros[i] > maximo) {// Se o número atual for maior que maximo, atualizar maximo para esse novo valor
      maximo = numeros[i];// Atualizar maximo para o número atual, que é maior do que o valor anterior armazenado em maximo
    }
  }
  return maximo;// Retornar o valor máximo encontrado no array para que possa ser usado posteriormente, se necessário
}

function calcularMinimo(numeros) {
  if (numeros.length === 0) return null;

  let minimo = numeros[0];
  for (let i = 1; i < numeros.length; i++) {// Loop que itera a partir do segundo elemento do array, comparando cada número com o valor atual de minimo
    if (numeros[i] < minimo) {
      minimo = numeros[i];
    }
  }
  return minimo;
}

function calcularMedia(numeros) {// Função para calcular a média de um array de números
  if (numeros.length === 0) return null;// Verificar se o array está vazio, retornando null se for o caso

  let soma = 0;// Variável para armazenar a soma acumulada dos números no array
  for (let i = 0; i < numeros.length; i++) {// Loop que itera por todos os elementos do array, adicionando cada número à variável soma
    soma += numeros[i];// Adicionar o número atual (numeros[i]) à soma acumulada para calcular o total de todos os números no array
  }
  return soma / numeros.length; // Retornar a média calculada dividindo a soma total pelo número de elementos no array (numeros.length) para obter o valor médio dos números no array
}

// Função principal que usa as três anteriores
function estatisticasSequencia(numeros) {// Função para calcular e imprimir o máximo, mínimo e média de uma sequência de números
  console.log(`\n--- Exercício 11 ---`);
  console.log(`Sequência de números: [${numeros.join(", ")}]`);// Imprimir a sequência de números fornecida usando template literals e o método join para formatar a saída
  console.log(`Máximo: ${calcularMaximo(numeros)}`);// Calcular e imprimir o valor máximo da sequência usando a função calcularMaximo e formatando a saída com template literals
  console.log(`Mínimo: ${calcularMinimo(numeros)}`);
  console.log(`Média: ${calcularMedia(numeros).toFixed(2)}`);// Calcular e imprimir a média da sequência usando a função calcularMedia, formatando o resultado para duas casas decimais com o método toFixed(2) e usando template literals para formatar a saída
}

// Teste
const sequencia = [12, 45, 7, 23, 56, 89, 34, 2, 67];// Sequência de números para testar a função estatisticasSequencia
estatisticasSequencia(sequencia);// A função estatisticasSequencia é chamada com a sequência de números fornecida, e os resultados do máximo, mínimo e média são impressos no console

console.log("-----------------------------------");

function min(array) {// Função para calcular o valor mínimo em um array de números
  let min = array[0];// Inicializar a variável min com o primeiro elemento do array para começar a comparação
  for (let i = 1; i < array.length; i++) {// Loop que itera a partir do segundo elemento do array, comparando cada número com o valor atual de min
    if (array[i] < min) {// Se o número atual for menor que min, atualizar min para esse novo valor
      min = array[i];// Atualizar min para o número atual, que é menor do que o valor anterior armazenado em min
    }
  }
  return min;// Retornar o valor mínimo encontrado no array para que possa ser usado posteriormente, se necessário
}

function max(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function media(array) {// Função para calcular a média de um array de números
  let soma = 0;// Variável para armazenar a soma acumulada dos números no array
  for (let i = 0; i < array.length; i++) {// Loop que itera por todos os elementos do array, adicionando cada número à variável soma
    soma += array[i];// Adicionar o número atual (array[i]) à soma acumulada para calcular o total de todos os números no array
  }
  return soma / array.length;// Retornar a média calculada dividindo a soma total pelo número de elementos no array (array.length) para obter o valor médio dos números no array
}

array = [1, 4, 3, 6, 8, 12, 5, 34, 2, 67, 23];// Array de números para testar as funções min, max e media
console.log("Para o array:");
console.log(array);
console.log("O valor mínimo é:" + min(array));
console.log("O valor máximo é:" + max(array));
console.log("O valor médio é:" + media(array));// Os resultados do valor mínimo, máximo e médio do array são calculados usando as funções min, max e media, respectivamente, e impressos no console usando concatenação de strings para formatar a mensagem
