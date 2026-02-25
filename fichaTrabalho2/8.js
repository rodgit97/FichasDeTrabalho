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

function caixa(lado) {
  for (let i = 0; i < lado; i++) {
    linha ="";
    for (let j = 0; j < lado; j++) {
      if (i === 0 || i === lado-1 || j===0||j===lado -1) {
        linha += "*";
      } else {
        linha += " ";
      }
      
    }
    console.log(linha);
    
  } 

}
caixa(6);


function repeatCaixa(lado) {
  for (let i = 0; i < lado; i++) {
    linha = "";
    if (i===0|| i===lado-1) {
      linha = "*".repeat(lado);

    }else{
      linha = "*" + " ".repeat(lado-2) + "*";
    }
    console.log(linha);
  }
  
}
repeatCaixa(6);