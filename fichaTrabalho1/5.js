// // // function calcular(p1, p2, f) {
// // //   return p1 * 0.3 + p2 * 0.4 + f * 0.3;
// // // }

// // // var finalGrade = calcular(15, 15, 5);
// // // console.log(calcular);
// // // console.log(calcular(15, 10, 10));

// // // calcular();

// // function avaliacao(tearica, pratica) {
// //   let media = (tearica * pratica) / 2;
// //   if (media >= 10) {
// //     console.log("aprovado " + media);
// //   } else {
// //     console.log("reprovado " + media);
// //   }
// // }

// // avaliacao(14, 12);
// // avaliacao(16, 16);
// // avaliacao(8, 16);
// // avaliacao(13, 11);
// // avaliacao(12, 10);

// console.log("\n\n=== CÓDIGO CORRIGIDO ===\n");

// function calcularNotaFinal(p1, p2, f) {
//   if (p1 === undefined || p2 === undefined || f === undefined) {
//     console.log("⚠️ Erro: Todos os parâmetros são obrigatórios!");
//     return null;
//   }

//   return p1 * 0.3 + p2 * 0.4 + f * 0.3;
// }

// var notaFinal1 = calcularNotaFinal(15, 15, 5);
// console.log("Nota Final (15, 15, 5):", notaFinal1);

// var notaFinal2 = calcularNotaFinal(15, 10, 10);
// console.log("Nota Final (15, 10, 10):", notaFinal2);

// var notaFinal3 = calcularNotaFinal();
// console.log("Nota Final (sem args):", notaFinal3);

// //----------------------------------------------------
// console.log("\n\n=== VERSÃO ROBUSTA ===\n");

// function calcularNotaComValidacao(p1, p2, f) {
//   if (arguments.length !== 3) {
//     throw new Error(`Esperados 3 argumentos, recebidos ${arguments.length}`);
//   }

//   if (typeof p1 !== 'number' || typeof p2 !== 'number' || typeof f !== 'number') {
//     throw new Error("Todos os parâmetros devem ser números");
//   }

//   if (p1 < 0 || p1 > 20 || p2 < 0 || p2 > 20 || f < 0 || f > 20) {
//     throw new Error("As notas devem estar entre 0 e 20");
//   }

//   const notaFinal = p1 * 0.3 + p2 * 0.4 + f * 0.3;
//   return notaFinal;
// }

// try {
//   console.log("Nota (15, 15, 5):", calcularNotaComValidacao(15, 15, 5));
//   console.log("Nota (18, 16, 20):", calcularNotaComValidacao(18, 16, 20));

//   console.log("\nTentando chamar sem argumentos...");
//   console.log(calcularNotaComValidacao());
// } catch (erro) {
//   console.log("❌ Erro capturado:", erro.message);
// }

// //-----------------------------------------------
// console.log("\n\n=== EXPLICAÇÃO ===\n");

// console.log("1. console.log(calcular) → Imprime a FUNÇÃO, não o resultado");
// console.log("   Para imprimir o resultado, use: console.log(calcular(15, 15, 5))\n");

// console.log("2. calcular() → Retorna NaN porque:");
// console.log("   - p1 = undefined");
// console.log("   - p2 = undefined");
// console.log("   - f = undefined");
// console.log("   - undefined * 0.3 = NaN");
// console.log("   Demonstração:", undefined * 0.3, "\n");

// console.log("3. Sempre forneça todos os argumentos necessários!");

function avaliacao(teorica, pratica) {
  let media = (teorica + pratica) / 2;
  if (media >= 9.5) {
    console.log("aprovado : " + media);
  } else {
    console.log("reprovado : " + media);
  }
}

avaliacao(12, 15);
avaliacao(2, 15);
avaliacao(12, 5);
avaliacao(20, 20);
avaliacao(2, 8);
