function imprimirMultiplosDe5() {
  // Função para imprimir os múltiplos de 5 menores que 20
  console.log(`\n--- Exercício 8 ---`);
  console.log("Múltiplos de 5 menores que 20:");

  for (let i = 5; i < 20; i += 5) {
    // Loop que começa em 5 e incrementa de 5 em 5, garantindo que apenas os múltiplos de 5 sejam considerados
    console.log(i);
  }
}

// Teste
imprimirMultiplosDe5(); // Os múltiplos de 5 menores que 20 são 5, 10 e 15, então esses números são impressos
console.log("-----------------------------------");

function multiplos() {
  // Função para imprimir os múltiplos de 5 menores que 20 usando um loop e uma condição
  for (let index = 0; index < 20; index++) {
    // Loop que itera de 0 a 19, verificando cada número para determinar se é um múltiplo de 5
    if (index % 5 === 0) {
      // Verificar se o número atual é um múltiplo de 5 usando o operador módulo
      console.log(index); // Se o número for um múltiplo de 5, ele é impresso
    }
    const element = array[index];// Esta linha parece ser um erro ou código não utilizado, pois 'array' não está definido e 'element' não é usado posteriormente
  }
}

multiplos();// Os múltiplos de 5 menores que 20 são 0, 5, 10 e 15, então esses números são impressos
console.log("-----------------------------------");

function multiplosEficientes() {// Função para imprimir os múltiplos de 5 menores que 20 de forma eficiente, iterando apenas pelos múltiplos de 5
  for (let i = 5; i < 20; i++) {// Loop que começa em 5 e incrementa de 5 em 5, garantindo que apenas os múltiplos de 5 sejam considerados
    console.log(i + " ");// Imprimir o múltiplo de 5 atual seguido de um espaço para formatar a saída
  }
}
function multiplos() {// Função para imprimir os múltiplos de 5 menores que 20 usando um loop e uma condição
  for (let i = 1; i < 20; i++)// Loop que itera de 1 a 19, verificando cada número para determinar se é um múltiplo de 5
    if (i % 5 == 0) {// Verificar se o número atual é um múltiplo de 5 usando o operador módulo
      console.log(i + " ");
    }
}

multiplos();// Os múltiplos de 5 menores que 20 são 5, 10 e 15, então esses números são impressos
multiplosEficientes();// Os múltiplos de 5 menores que 20 são 5, 10 e 15, então esses números são impressos
