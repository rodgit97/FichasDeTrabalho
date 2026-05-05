function calcular(p1, p2, f) { // calcular a nota final
  return p1 * 0.3 + p2 * 0.4 + f * 0.3; // 30% da p1, 40% da p2 e 30% da f
}

var finalGrade = calcular(15, 15, 5); // 15*0.3 + 15*0.4 + 5*0.3 = 4.5 + 6 + 1.5 = 12
console.log(calcular); // Imprime a função, não o resultado
console.log(calcular(15, 10, 10));// 15*0.3 + 10*0.4 + 10*0.3 = 4.5 + 4 + 3 = 11.5

calcular(); // Retorna NaN porque:
// p1 = undefined, p2 = undefined, f = undefined

console.log("-----------------------------------")

function avaliacao(tearica, pratica) { // avaliar se o aluno está aprovado ou reprovado
  let media = (tearica * pratica) / 2; // A média é calculada multiplicando a nota teórica pela prática e dividindo por 2
  if (media >= 10) { // Se a média for maior ou igual a 10, o aluno está aprovado
    console.log("aprovado " + media); // Se a média for menor que 10, o aluno está reprovado
  } else { // Se a média for menor que 10, o aluno está reprovado
    console.log("reprovado " + media);// O resultado da média é impresso junto com a mensagem de aprovação ou reprovação
  }
}

avaliacao(14, 12);// 14*12/2 = 84
avaliacao(16, 16);
avaliacao(8, 16);
avaliacao(13, 11);
avaliacao(12, 10);

//---------------------------------------------
console.log("-----------------------------------")

console.log("\n\n=== CÓDIGO CORRIGIDO ===\n");

function calcularNotaFinal(p1, p2, f) { // calcular a nota final com validação de argumentos
  if (p1 === undefined || p2 === undefined || f === undefined) { // Verificar se algum argumento está faltando
    console.log("⚠️ Erro: Todos os parâmetros são obrigatórios!");// Se algum argumento estiver faltando, exibir uma mensagem de erro e retornar null
    return null; // Retorna null para indicar que a nota final não pode ser calculada devido à falta de argumentos
  }

  return p1 * 0.3 + p2 * 0.4 + f * 0.3; // 30% da p1, 40% da p2 e 30% da f
}

var notaFinal1 = calcularNotaFinal(15, 15, 5);// 15*0.3 + 15*0.4 + 5*0.3 = 4.5 + 6 + 1.5 = 12
console.log("Nota Final (15, 15, 5):", notaFinal1);// O resultado da nota final é impresso junto com os valores dos argumentos usados para o cálculo

var notaFinal2 = calcularNotaFinal(15, 10, 10);
console.log("Nota Final (15, 10, 10):", notaFinal2);

var notaFinal3 = calcularNotaFinal();
console.log("Nota Final (sem args):", notaFinal3);

//----------------------------------------------------
console.log("-----------------------------------")

console.log("\n\n=== VERSÃO ROBUSTA ===\n");

function calcularNotaComValidacao(p1, p2, f) {// calcular a nota final com validação de argumentos e tipos e valores
  if (arguments.length !== 3) { // Verificar se o número de argumentos é diferente de 3
    throw new Error(`Esperados 3 argumentos, recebidos ${arguments.length}`); // Se o número de argumentos for diferente de 3, lançar um erro indicando quantos argumentos foram recebidos
  }

  if (typeof p1 !== 'number' || typeof p2 !== 'number' || typeof f !== 'number') {// Verificar se algum argumento não é do tipo número
    throw new Error("Todos os parâmetros devem ser números");// Se algum argumento não for do tipo número, lançar um erro indicando que todos os parâmetros devem ser números
  }

  if (p1 < 0 || p1 > 20 || p2 < 0 || p2 > 20 || f < 0 || f > 20) { // Verificar se algum argumento está fora do intervalo permitido (0 a 20)
    throw new Error("As notas devem estar entre 0 e 20");// Se algum argumento estiver fora do intervalo permitido, lançar um erro indicando que as notas devem estar entre 0 e 20
  }

  const notaFinal = p1 * 0.3 + p2 * 0.4 + f * 0.3;// Calcular a nota final usando a fórmula: 30% da p1, 40% da p2 e 30% da f
  return notaFinal; // Retornar a nota final calculada
}

try {// Testar a função com valores válidos
  console.log("Nota (15, 15, 5):", calcularNotaComValidacao(15, 15, 5));// 15*0.3 + 15*0.4 + 5*0.3 = 4.5 + 6 + 1.5 = 12
  console.log("Nota (18, 16, 20):", calcularNotaComValidacao(18, 16, 20));

  console.log("\nTentando chamar sem argumentos...");
  console.log(calcularNotaComValidacao());// Deve lançar um erro porque faltam os argumentos
} catch (erro) {// Capturar e exibir o erro lançado pela função
  console.log("❌ Erro capturado:", erro.message);// O erro é capturado e a mensagem de erro é exibida
}

console.log("-----------------------------------")

console.log("\n\n=== EXPLICAÇÃO ===\n");

console.log("1. console.log(calcular) → Imprime a FUNÇÃO, não o resultado");
console.log("   Para imprimir o resultado, use: console.log(calcular(15, 15, 5))\n");

console.log("2. calcular() → Retorna NaN porque:");
console.log("   - p1 = undefined");
console.log("   - p2 = undefined");
console.log("   - f = undefined");
console.log("   - undefined * 0.3 = NaN");
console.log("   Demonstração:", undefined * 0.3, "\n");

console.log("3. Sempre forneça todos os argumentos necessários!");


console.log("-----------------------------------")
function avaliacao(teorica, pratica) {// avaliar se o aluno está aprovado ou reprovado
  let media = (teorica + pratica) / 2;// A média é calculada somando a nota teórica com a prática e dividindo por 2
  if (media >= 9.5) {// Se a média for maior ou igual a 9.5, o aluno está aprovado
    console.log("aprovado : " + media);// Se a média for menor que 9.5, o aluno está reprovado
  } else {// Se a média for menor que 9.5, o aluno está reprovado
    console.log("reprovado : " + media);
  }
}

avaliacao(12, 15);// 12+15/2 = 13.5
avaliacao(2, 15);
avaliacao(12, 5);
avaliacao(20, 20);
avaliacao(2, 8);
