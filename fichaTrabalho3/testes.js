const arrayUtils = require("./ArrayUtils");// Importar o módulo ArrayUtils usando a função require e atribuí-lo à constante arrayUtils para acessar as funções definidas no módulo ArrayUtils, que provavelmente contém várias funções utilitárias para manipulação de arrays, como max, average, min, reverse, concatenate, swap e contains.

const array1 = [1, 2, 3, 5, 4, 7, 8, 9, 6];// Definir um array de números chamado array1 com os valores [1, 2, 3, 5, 4, 7, 8, 9, 6] para ser usado como entrada para testar as funções do módulo ArrayUtils. Este array contém uma sequência de números inteiros em ordem não crescente para verificar o comportamento das funções de manipulação de arrays.
const array2 = [2, 5, 4, 7, 3, 6, 5];
const array3 = [4, 7, 9, 8, 5];
const array4 = [5, 4, 7, 9, 3, 6, 5];

console.log(arrayUtils.max(array1));// Chamar a função max do módulo ArrayUtils, passando o array1 como argumento, para calcular e imprimir o valor máximo presente no array1. A função max provavelmente percorre os elementos do array1 para encontrar o maior valor e retorná-lo, que será exibido no console.
console.log(arrayUtils.average(array1));
console.log(arrayUtils.min(array2));
console.log(arrayUtils.reverse(array3));
console.log(arrayUtils.concatenate(array4, array2));
console.log(arrayUtils.swap(array1, 6, 3));
console.log(arrayUtils.contains(array1, 6));
