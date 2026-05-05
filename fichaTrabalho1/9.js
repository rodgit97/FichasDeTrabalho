function somaPrimeiros100Numeros() {
  // função para calcular a soma dos primeiros 100 números inteiros usando um loop
  let soma = 0; // Variável para armazenar a soma acumulada dos números

  for (let i = 1; i <= 100; i++) {
    // Loop que itera de 1 a 100, adicionando cada número à variável soma
    soma += i; // Adicionar o número atual (i) à soma acumulada
  }

  console.log(`\n--- Exercício 9 ---`);
  console.log(`Soma dos primeiros 100 números: ${soma}`); // Imprimir o resultado da soma dos primeiros 100 números usando template literals para formatar a string

  return soma; // Retornar a soma calculada para que possa ser usada posteriormente, se necessário
}
somaPrimeiros100Numeros(); // A soma dos primeiros 100 números inteiros é 5050, então esse valor é impresso

console.log("-----------------------------------");

//---------------------------------
function soma_primeiros(n) {
  // função para calcular a soma dos primeiros n números inteiros usando um loop
  let soma = 0; // Variável para armazenar a soma acumulada dos números
  for (let i = 0; i <= n; i++) {
    // Loop que itera de 0 a n, adicionando cada número à variável soma
    soma += i;
  }
  console.log("A soma dos primeiros " + n + " números é:" + soma); // Imprimir o resultado da soma dos primeiros n números usando concatenação de strings para formatar a mensagem
}

function soma_primeiros_gauss(n) {// função para calcular a soma dos primeiros n números inteiros usando a fórmula de Gauss
  let soma = (n * (n + 1)) / 2;// Calcular a soma dos primeiros n números inteiros usando a fórmula de Gauss: n(n + 1) / 2

  console.log("A soma dos primeiros " + n + " números é:" + soma);// Imprimir o resultado da soma dos primeiros n números usando concatenação de strings para formatar a mensagem
}

soma_primeiros(100);// A soma dos primeiros 100 números inteiros é 5050, então esse valor é impresso
soma_primeiros_gauss(100);// A soma dos primeiros 100 números inteiros é 5050, então esse valor é impresso
