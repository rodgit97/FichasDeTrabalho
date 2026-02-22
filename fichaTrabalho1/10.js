// // function calcularFatorial(numero) {
// //     console.log(`\n--- Exercício 10 ---`);

// //     if (numero < 0) {
// //         console.log("Erro: Fatorial não existe para números negativos!");
// //         return null;
// //     }

// //     if (numero === 0 || numero === 1) {
// //         console.log(`Fatorial de ${numero} = 1`);
// //         return 1;
// //     }

// //     let fatorial = 1;
// //     for (let i = 2; i <= numero; i++) {
// //         fatorial *= i;
// //     }

// //     console.log(`Fatorial de ${numero} = ${fatorial}`);
// //     return fatorial;
// // }

// // calcularFatorial(5);
// // calcularFatorial(0);
// // calcularFatorial(10);´

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
// function fatorial_recursivo(num) {
//     if (num==1)
//         return 1;
//     return n * fatorial_recursivo();

// }
// fatorial_recursivo()

function factorial(n) {
  let factor = 1;
  for (let i = 2; i <= n; i++) {
    factor *= i;
  }
  return factor;
}

let valor = factorial(5);
console.log("fatorial de 5 é: " + valor);
//--------------------------------------------------
function fatorialRecursiva(num) {
  if (num == 1) return 1;
  return num * fatorialRecursiva(num - 1);
}

valor = fatorialRecursiva(5);
console.log("factorial de 5 é " + valor);
