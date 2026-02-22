// // function imprimirMes(numMes) {
// //   if (numMes < 1 || numMes > 12) {
// //     console.log("o numero deve estar entre 1 e 12");
// //   }
// //   let mes = [
// //     "janeiro",
// //     "fevereiro",
// //     "marco",
// //     "abril",
// //     "maio",
// //     "junho",
// //     "julho",
// //     "agosto",
// //     "setembro",
// //     "outubro",
// //     "novembro",
// //     "dezembro",
// //   ];

// //   console.log(mes(numMes));
// // }
// // imprimirMes(1);
// // imprimirMes(2);
// // imprimirMes(3);
// // imprimirMes(4);
// // imprimirMes(5);
// // imprimirMes(6);
// // imprimirMes(7);
// // imprimirMes(8);

// //  ========================================
// function imprimirNomeMes(numeroMes) {
//     const meses = [
//         "Janeiro", "Fevereiro", "Março", "Abril",
//         "Maio", "Junho", "Julho", "Agosto",
//         "Setembro", "Outubro", "Novembro", "Dezembro"
//     ];

//     console.log(`\n--- Exercício 6 ---`);

//     if (numeroMes >= 1 && numeroMes <= 12) {
//         console.log(`Mês ${numeroMes}: ${meses[numeroMes - 1]}`);
//     } else {
//         console.log(`Número de mês inválido: ${numeroMes}`);
//     }
// }

// imprimirNomeMes(3);
// imprimirNomeMes(12);
// imprimirNomeMes(13);

// // function imprimirMes(numMes) {
// //   if (numMes < 1 || numMes > 12) {
// //     console.log("o numero deve estar entre 1 e 12");
// //     return; // ✅ Parar aqui!
// //   }

// //   let mes = [
// //     "janeiro", "fevereiro", "março", "abril",
// //     "maio", "junho", "julho", "agosto",
// //     "setembro", "outubro", "novembro", "dezembro"
// //   ];

// //   console.log(mes[numMes - 1]); // ✅ Colchetes e -1
// // }
function nomedomes(num) {
  let nomes = [
    "",
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  console.log(nomes[num]);
}
nomedomes(1);
nomedomes(16);
nomedomes(26);
nomedomes(8);
nomedomes(5);
//------------------------------------
console.log("--------//---------");
function nomedomes2(num) {
  if (num < 1 || num > 12) {
    console.log("deve estar entre 1 e 12");
  }
  let nomes = [
    "",
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  console.log(nomes[num]);
}
nomedomes2(1);
nomedomes2(13);
nomedomes2(12);
nomedomes2(4);
nomedomes2(9);
