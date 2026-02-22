// //  ========================================
// function calcularMaximo(numeros) {
//   if (numeros.length === 0) return null;

//   let maximo = numeros[0];
//   for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > maximo) {
//       maximo = numeros[i];
//     }
//   }
//   return maximo;
// }

// function calcularMinimo(numeros) {
//   if (numeros.length === 0) return null;

//   let minimo = numeros[0];
//   for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] < minimo) {
//       minimo = numeros[i];
//     }
//   }
//   return minimo;
// }

// function calcularMedia(numeros) {
//   if (numeros.length === 0) return null;

//   let soma = 0;
//   for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i];
//   }
//   return soma / numeros.length;
// }

// // Função principal que usa as três anteriores
// function estatisticasSequencia(numeros) {
//   console.log(`\n--- Exercício 11 ---`);
//   console.log(`Sequência de números: [${numeros.join(", ")}]`);
//   console.log(`Máximo: ${calcularMaximo(numeros)}`);
//   console.log(`Mínimo: ${calcularMinimo(numeros)}`);
//   console.log(`Média: ${calcularMedia(numeros).toFixed(2)}`);
// }

// // Teste
// const sequencia = [12, 45, 7, 23, 56, 89, 34, 2, 67];
// estatisticasSequencia(sequencia);

function min(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
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

function media(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma / array.length;
}

array = [1, 4, 3, 6, 8, 12, 5, 34, 2, 67, 23];
console.log("Para o array:");
console.log(array);
console.log("O valor mínimo é:" + min(array));
console.log("O valor máximo é:" + max(array));
console.log("O valor médio é:" + media(array));
