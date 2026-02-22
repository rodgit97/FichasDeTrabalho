// // function imprimirMultiplosDe5() {
// //     console.log(`\n--- Exercício 8 ---`);
// //     console.log("Múltiplos de 5 menores que 20:");

// //     for (let i = 5; i < 20; i += 5) {
// //         console.log(i);
// //     }
// // }

// // // Teste
// // imprimirMultiplosDe5();

// function multiplos() {
//     for (let index = 0; index < 20; index++) {
//         if (condition) {

//         }
//         // const element = array[index];

//     }
// }

// multiplos();

function multiplosEficientes() {
  for (let i = 5; i < 20; i++) {
    console.log(i + " ");
  }
}
function multiplos() {
  for (let i = 1; i < 20; i++)
    if (i % 5 == 0) {
      console.log(i + " ");
    }
}

multiplos();
multiplosEficientes();
