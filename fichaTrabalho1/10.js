function calcularFatorial(numero) {
  // Função para calcular o fatorial de um número inteiro não negativo
  console.log(`\n--- Exercício 10 ---`);

  if (numero < 0) {
    // Verificar se o número é negativo, pois o fatorial não é definido para números negativos
    console.log("Erro: Fatorial não existe para números negativos!");
    return null; // Retornar null para indicar que o fatorial não pode ser calculado para números negativos
  }

  if (numero === 0 || numero === 1) {
    // O fatorial de 0 e 1 é definido como 1
    console.log(`Fatorial de ${numero} = 1`); // Imprimir o resultado do fatorial para 0 e 1
    return 1; // Retornar 1 para o fatorial de 0 e 1
  }

  let fatorial = 1; // Variável para armazenar o resultado do fatorial, iniciada em
  for (let i = 2; i <= numero; i++) {
    // Loop que itera de 2 até o número fornecido, multiplicando o valor atual de fatorial pelo número atual (i) em cada iteração
    fatorial *= i; // Multiplicar o valor atual de fatorial pelo número atual (i) e armazenar o resultado de volta em fatorial
  }

  console.log(`Fatorial de ${numero} = ${fatorial}`); // Imprimir o resultado do fatorial para o número fornecido usando template literals para formatar a string
  return fatorial; // Retornar o resultado do fatorial calculado para que possa ser usado posteriormente, se necessário
}

calcularFatorial(5); // O fatorial de 5 é 120, então esse valor é impresso
calcularFatorial(0);
calcularFatorial(10);
console.log("-----------------------------------");
//NAO FUNCIONA
// function factorial(n) {
//   let facto = 1;
//   for (let i = 2; i <= n; i++) {
//     facto *= i;
//   }
//   return facto;
// }

// let valor = factorial();
// console.log("fatorial de numero é de: " + valor);

// //------------------------------------------------
console.log("-----------------------------------");
//NAO FUNCIONA

// function fatorial_recursivo(num) {
//     if (num==1)
//         return 1;
//     return n * fatorial_recursivo();

// }
// fatorial_recursivo()
console.log("-----------------------------------");

function factorial(n) {
  // Função para calcular o fatorial de um número inteiro não negativo usando um loop
  let factor = 1; // Variável para armazenar o resultado do fatorial, iniciada em 1
  for (let i = 2; i <= n; i++) {
    // Loop que itera de 2 até o número fornecido, multiplicando o valor atual de factor pelo número atual (i) em cada iteração
    factor *= i; // Multiplicar o valor atual de factor pelo número atual (i) e armazenar o resultado de volta em factor
  }
  return factor; // Retornar o resultado do fatorial calculado para que possa ser usado posteriormente, se necessário
}

let valor = factorial(5); // O fatorial de 5 é 120, então esse valor é armazenado na variável valor
console.log("fatorial de 5 é: " + valor); // Imprimir o resultado do fatorial de 5 usando concatenação de strings para formatar a mensagem
//--------------------------------------------------
console.log("-----------------------------------");

function fatorialRecursiva(num) {
  // Função para calcular o fatorial de um número inteiro não negativo usando recursão
  if (num == 1) return 1;// Caso base: o fatorial de 1 é definido como 1, então se num for igual a 1, a função retorna 1
  return num * fatorialRecursiva(num - 1);// Passo recursivo: a função chama a si mesma com o argumento num - 1, multiplicando o resultado pelo valor atual de num para calcular o fatorial de forma recursiva
}

valor = fatorialRecursiva(5);// O fatorial de 5 é 120, então esse valor é armazenado na variável valor
console.log("factorial de 5 é " + valor);// Imprimir o resultado do fatorial de 5 usando concatenação de strings para formatar a mensagem
