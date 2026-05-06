// // // function isEmpty(array) {
// // //     console.log(typeof(array));

// // //     if (array === null || array === undefined || !Array.isArray(array)) {
// // //         console.log("variavel não está definida ou" + "não é um array");
// // //         return true;
// // //     }
// // //     if (array.length === 0) {
// // //         return true;
// // //     } else {
// // //         return false;
// // //     }
// // // }
// // // console.log(isEmpty());
// // // console.log(isEmpty(23));
// // // console.log(isEmpty([11, 22, 33]));
// // // console.log(isEmpty([null]));
// // // console.log(isEmpty(undefined));

// // //5

// // module.exports = {
// //   isEmpty: (array) => {
// //     return array.length === 0;
// //   },
// //   max: (array) => {
// //     let maxValue = array[0];
// //     for (let i = 1; i < array.length; i++) {
// //       if (array[i] > maxValue) {
// //         maxValue = array[i];
// //       }
// //     }
// //     return maxValue;
// //   },

// //   min: (array) => {
// //     let minValue = array[0];
// //     for (let i = 1; i < array.length; i++) {
// //       if (array[i] < minValue) {
// //         minValue = array[i];
// //       }
// //     }
// //     return minValue;
// //   },

// // };
// // //-----------------------------
// // //2
// // function isEmpty(array) {
// //   return array.length === 0;
// // }

// // function max(array) {
// //   let maxValue = array[0];
// //   for (let i = 1; i < array.length; i++) {
// //     if (array[i] > maxValue) {
// //       maxValue = array[i];
// //     }
// //   }
// //   return maxValue;
// // }

// // function min(array) {
// //   let minValue = array[0];
// //   for (let i = 1; i < array.length; i++) {
// //     if (array[i] < minValue) {
// //       minValue = array[i];
// //     }
// //   }
// //   return minValue;
// // }

// // function average(array) {
// //   let averageValue = 0;
// //   for (let i = 0; i < array.length; i++) {
// //     averageValue += array[i];
// //   }
// //   return averageValue / array.length;
// // }

// // function indexOF(array, value) {
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] === value) {
// //       return i;
// //     }
// //   }
// //   return -1;
// // }

// // function subArray(array, start, end) {
// //   let subArray = [];
// //   for (let i = start; i < end; i++) {
// //     if (i > start) {
// //       subArray.push(array[i]);
// //     }
// //   }
// // }

// // function isSameLength(a1, a2) {
// //   return a1.length === a2.length;
// // }
// // let array = [1, 2, 3, 5, 4];

// // function reverse(array) {
// //   arrayReverse = [];
// //   for (let i = array.length - 1; i >= 0; i++) {
// //     arrayReverse.push(array[i]);
// //   }
// //   return arrayReverse;
// // }

// // function swap(array, index1, index2) {
// //   array2 = [];
// //   for (let i = 0; i < array.length; i++) {
// //     const element = array[i];
// //   }
// //   // let int = array[index1];
// //   // array[index1] = array[index2];
// //   // array[index2] = int;

// //   // return array;
// //   return array2;
// // }

// // function contains(array, value) {
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] === value) {
// //       return true;
// //     }
// //   }
// //   return false;
// // }

// // function concatenate(a1, a2) {
// //   array = [];
// //   for (let i = 0; i < a1.length; i++) {
// //     array.push(a1[i]);
// //   }
// //   for (let i = 0; i < a2.length; i++) {
// //     array.push(a2[i]);
// //   }
// //   return array;
// // }

// // console.log(array);
// // console.log(isEmpty(array));
// // console.log(isEmpty([]));
// // console.log(max(array));
// // console.log(min(array));
// // console.log(average(array));
// // console.log(indexOF(array, 3));
// // console.log(indexOF(array, 6));

// // a1 = [1, 2, 3];
// // a2 = [4, 5, 6];
// // a3 = [1, 2, 4, 3];
// // console.log(isSameLength(a1, a2));
// // console.log(isSameLength(array, a3));

// // console.log(reverse(array));

// // // console.log(swap(array, 0, 4));
// // console.log(swap(array, 0, 4));

// // console.log(contains(array, 3));

// // console.log(concatenate(a1, a2));

// function isEmpty(array) {
//   return array.lenght === 0;
// }

// function max(array) {
//   let maxValor = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > maxValor) {
//       maxValor = array[i];
//     }
//   }
//   return maxValor;
// }

// function min(array) {
//   let minValor = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < minValor) {
//       minValor = array[i];
//     }
//   }
//   return minValor;
// }

// function average(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum / array.length;
// }

// function indexOf(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// function subArray(array, start, end) {
//   let subArray = [];
//   for (let i = start; i <= end; i++) {
//     subArray.push(array[i]);
//   }
//   return subArray;
// }

// function isSameLength(arra1, arra2) {
//   return arra1.length === arra2.length;
// }

// function reverse(array) {
//   let arayReverse = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     arayReverse.push(array[i]);

//     return arayReverse;
//   }
// }

// function swap(array, index1, index2) {
//   let array2 = [];
//   for (let i = 0; i < array.length; i++) {
//     array2.push(array[i]);
//   }
//   let int = array2[index1];
//   array2[index1] = array2[array2];
//   array2[index2] = int;
//   return array2;
// }

// function contains(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }


// // isEmpty([]);
// array = [1, 2, 3, 5, 4];
// arra1 = [3, 5, 6];
// arra2 = [3, 5, 7];
// console.log(isEmpty(array));
// console.log(max(array));
// console.log(min(array));
// console.log(average(array));
// console.log(indexOf(array, 3));
// console.log(isSameLength(arra1, arra2));
// console.log(reverse(array));
// console.log(swap(array, 0, 4));
// console.log(contains(array, 3));

module.exports = { // exportar as funções como um objeto para que possam ser usadas em outros arquivos
    isEmpty: (array) => {    // função para verificar se um array está vazio, que recebe um parâmetro array e retorna true se o array estiver vazio (ou seja, tiver comprimento 0) e false caso contrário
        return array.length === 0;        // Verificar se o comprimento do array é igual a 0 e retornar true se for, ou false caso contrário
    },

    max: (array) => { // função para encontrar o valor máximo em um array, que recebe um parâmetro array e retorna o maior valor presente no array. A função assume que o array contém pelo menos um elemento e que todos os elementos são comparáveis (por exemplo, números ou strings).
        let max = array[0];// Inicializar a variável max com o primeiro elemento do array para começar a comparação
        for (let i = 1; i < array.length; i++){// Iterar sobre os elementos do array a partir do segundo elemento (índice 1) até o final do array
            if(array[i] > max) // Comparar o elemento atual do array com o valor armazenado em max, e se o elemento atual for maior, atualizar max para esse novo valor
                max = array[i];       // Retornar o valor máximo encontrado no array após a conclusão da iteração
        }
        return max; // Retornar o valor máximo encontrado no array após a conclusão da iteração
    },

    min:(array) => {
        let min = array[0];
        for (let i = 1; i < array.length; i++){
            if(array[i] < min)
                min = array[i];       
        }
        return min;
    },
    
    average: (array) => { // função para calcular a média de um array, que recebe um parâmetro array e retorna a média dos valores presentes no array. A função assume que o array contém pelo menos um elemento e que todos os elementos são números.
        let sum = 0; // Inicializar a variável sum com 0 para acumular a soma dos elementos do array
        for (let i = 0; i < array.length; i++) {
            sum += array[i]; // Iterar sobre os elementos do array e adicionar cada elemento à variável sum para calcular a soma total dos elementos do array
        }
        return sum / array.length;// Retornar a média dos valores presentes no array, que é calculada dividindo a soma total (sum) pelo número de elementos no array (array.length)
    },

    indexOf: (array, value) => { // função para encontrar o índice de um valor em um array, que recebe dois parâmetros: array e value. A função retorna o índice da primeira ocorrência de value no array, ou -1 se value não estiver presente no array.
        for (let i = 0; i < array.length; i++) { // Iterar sobre os elementos do array usando um loop for, começando do índice 0 até o final do array
            if(array[i] === value) // Comparar o elemento atual do array com o valor fornecido (value), e se eles forem iguais, retornar o índice atual (i) onde o valor foi encontrado no array
                return i; // Retornar o índice da primeira ocorrência de value no array, ou -1 se value não estiver presente no array
        }
        return -1; // Retornar -1 se o valor fornecido (value) não for encontrado em nenhum elemento do array após a conclusão da iteração
    },

    subArray: (array, start, end) => { // função para extrair um subarray de um array, que recebe três parâmetros: array, start e end. A função retorna um novo array contendo os elementos do array original desde o índice start até o índice end (inclusive). A função assume que start e end são índices válidos dentro dos limites do array.
        let subArray = [];// Inicializar um novo array vazio chamado subArray para armazenar os elementos extraídos do array original
        for (let i = start; i <= end; i++) { // Iterar sobre os elementos do array original usando um loop for, começando do índice start até o índice end (inclusive)
            subArray.push(array[i]); // Adicionar cada elemento do array original que está dentro do intervalo definido por start e end ao array subArray usando o método push
        }
        return subArray; // Retornar o novo array subArray que contém os elementos extraídos do array original dentro do intervalo definido por start e end
    },

    isSameLength: (arr1, arr2) => { // função para verificar se dois arrays têm o mesmo comprimento, que recebe dois parâmetros: arr1 e arr2. A função retorna true se os arrays tiverem o mesmo comprimento, ou false caso contrário.
        return arr1.length === arr2.length;// Comparar o comprimento dos dois arrays (arr1.length e arr2.length) e retornar true se forem iguais, ou false caso contrário
    },

    reverse: (array) => { // função para inverter a ordem dos elementos em um array, que recebe um parâmetro array e retorna um novo array com os elementos na ordem inversa. A função assume que o array contém pelo menos um elemento.
        let arrayRev = []; // Inicializar um novo array vazio chamado arrayRev para armazenar os elementos do array original na ordem inversa
        for (let i = array.length-1; i >= 0; i--) { // Iterar sobre os elementos do array original usando um loop for, começando do último índice (array.length - 1) até o primeiro índice (0), decrementando o índice a cada iteração
            arrayRev.push(array[i]); // Adicionar cada elemento do array original na ordem inversa ao arrayRev usando o método push
        }
        return arrayRev;
    },
    
    swap: (array, index1, index2) => { /// função para trocar a posição de dois elementos em um array, que recebe três parâmetros: array, index1 e index2. A função retorna um novo array com os elementos nas posições index1 e index2 trocados. A função assume que index1 e index2 são índices válidos dentro dos limites do array.
        let array2 = []; // Inicializar um novo array vazio chamado array2 para armazenar os elementos do array original, que será modificado para realizar a troca dos elementos nas posições index1 e index2
        for (let i = 0; i < array.length; i++) {
            array2.push(array[i]);// Iterar sobre os elementos do array original usando um loop for, começando do índice 0 até o final do array, e adicionar cada elemento ao array2 usando o método push para criar uma cópia do array original que será modificada para realizar a troca dos elementos
        }
        // alterar arry original
        let int = array2[index1]; // Armazenar o elemento do array2 na posição index1 em uma variável temporária chamada int para preservar seu valor durante a troca
        array2[index1] = array2[index2]; // Atribuir o valor do elemento na posição index2 do array2 para a posição index1, efetivamente movendo o elemento de index2 para index1
        array2[index2] = int; // Atribuir o valor armazenado na variável int (que é o elemento original da posição index1) para a posição index2 do array2, completando a troca dos elementos nas posições index1 e index2

        return array2;
    },
    
    contains: (array, value) => {// função para verificar se um array contém um determinado valor, que recebe dois parâmetros: array e value. A função retorna true se o valor estiver presente em algum elemento do array, ou false caso contrário.
        for (let i = 0; i < array.length; i++) {
            if(array[i] === value)        //    Iterar sobre os elementos do array usando um loop for, começando do índice 0 até o final do array, e comparar cada elemento com o valor fornecido (value). Se algum elemento do array for igual ao valor fornecido, retornar true para indicar que o valor está presente no array
                return true // Retornar true se o valor fornecido (value) for encontrado em algum elemento do array durante a iteração, indicando que o array contém o valor. Se a iteração for concluída sem encontrar o valor, retornar false para indicar que o valor não está presente no array
        }
        return false;// Retornar false se o valor fornecido (value) não for encontrado em nenhum elemento do array após a conclusão da iteração, indicando que o array não contém o valor
    },
    
    concatenate: (a1, a2) => { // função para concatenar dois arrays, que recebe dois parâmetros: a1 e a2. A função retorna um novo array que contém todos os elementos de a1 seguidos por todos os elementos de a2. A função assume que ambos os parâmetros são arrays.
        let array = [];// Inicializar um novo array vazio chamado array para armazenar os elementos concatenados de a1 e a2
        for (let i = 0; i < a1.length; i++) { // Iterar sobre os elementos do array a1 usando um loop for, começando do índice 0 até o final do array, e adicionar cada elemento ao array
            array.push(a1[i]);// Adicionar cada elemento do array a1 ao array usando o método push para construir o novo array que conterá os elementos de a1 seguidos pelos elementos de a2
        }

        for (let i = 0; i < a2.length; i++) {
            array.push(a2[i]);        
        }
        return array // Retornar o novo array que contém todos os elementos de a1 seguidos por todos os elementos de a2, resultando na concatenação dos dois arrays
    }
};

//------------------------------------------
// igual ao arrayUtils mas com validações.

module.exports = { // exportar as funções como um objeto para que possam ser usadas em outros arquivos

    isEmpty: (array) => {// função para verificar se um array está vazio, que recebe um parâmetro array e retorna true se o array estiver vazio (ou seja, tiver comprimento 0) e false caso contrário
        if (!Array.isArray(array)) //   Verificar se o parâmetro fornecido (array) é realmente um array usando o método Array.isArray. Se não for um array, lançar um erro do tipo TypeError com uma mensagem indicando que o parâmetro deve ser um array
            throw new TypeError("'array' deve ser um array.");// Verificar se o comprimento do array é igual a 0 e retornar true se for, ou false caso contrário

        return array.length === 0;// Verificar se o comprimento do array é igual a 0 e retornar true se for, ou false caso contrário
    },

    max: (array) => {// função para encontrar o valor máximo em um array, que recebe um parâmetro array e retorna o maior valor presente no array. A função assume que o array contém pelo menos um elemento e que todos os elementos são comparáveis (por exemplo, números ou strings).
        if (!Array.isArray(array)) //  Verificar se o parâmetro fornecido (array) é realmente um array usando o método Array.isArray. Se não for um array, lançar um erro do tipo TypeError com uma mensagem indicando que o parâmetro deve ser um array
            throw new TypeError("'array' deve ser um array.");// Verificar se o comprimento do array é igual a 0 e lançar um erro do tipo RangeError com uma mensagem indicando que o array não pode estar vazio, pois a função precisa de pelo menos um elemento para determinar o valor máximo

        if (array.length === 0) // Verificar se o comprimento do array é igual a 0 e lançar um erro do tipo RangeError com uma mensagem indicando que o array não pode estar vazio, pois a função precisa de pelo menos um elemento para determinar o valor máximo
            throw new RangeError("O array não pode estar vazio."); // Inicializar a variável max com o primeiro elemento do array para começar a comparação

        let max = array[0];// Inicializar a variável max com o primeiro elemento do array para começar a comparação
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) max = array[i];
        }
        return max;
    },

    min: (array) => {
        if (!Array.isArray(array)) 
            throw new TypeError("'array' deve ser um array.");

        if (array.length === 0) 
            throw new RangeError("O array não pode estar vazio.");

        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) min = array[i];
        }
        return min;
    },

    average: (array) => {      // função para calcular a média de um array, que recebe um parâmetro array e retorna a média dos valores presentes no array. A função assume que o array contém pelo menos um elemento e que todos os elementos são números.
        if (!Array.isArray(array)) // Verificar se o parâmetro fornecido (array) é realmente um array usando o método Array.isArray. Se não for um array, lançar um erro do tipo TypeError com uma mensagem indicando que o parâmetro deve ser um array
            throw new TypeError("'array' deve ser um array.");

        if (array.length === 0) 
            throw new RangeError("O array não pode estar vazio.");

        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] !== "number") // Verificar se o elemento atual do array é do tipo número usando o operador typeof. Se algum elemento não for um número, lançar um erro do tipo TypeError com uma mensagem indicando que todos os elementos do array devem ser números, especificando o índice do elemento problemático
                throw new TypeError(`O elemento no índice ${i} não é um número.`); 
            sum += array[i];// Iterar sobre os elementos do array e adicionar cada elemento à variável sum para calcular a soma total dos elementos do array
        }
        return sum / array.length; // Retornar a média dos valores presentes no array, que é calculada dividindo a soma total (sum) pelo número de elementos no array (array.length)
    },

    indexOf: (array, value) => {// função para encontrar o índice de um valor em um array, que recebe dois parâmetros: array e value. A função retorna o índice da primeira ocorrência de value no array, ou -1 se value não estiver presente no array.
        if (!Array.isArray(array)) // Verificar se o parâmetro fornecido (array) é realmente um array usando o método Array.isArray. Se não for um array, lançar um erro do tipo TypeError com uma mensagem indicando que o parâmetro deve ser um array
            throw new TypeError("'array' deve ser um array.");

        if (value === undefined) // Verificar se o valor fornecido (value) é undefined, o que indica que o parâmetro value não foi fornecido. Se for o caso, lançar um erro do tipo Error com uma mensagem indicando que o parâmetro value é obrigatório
            throw new Error("O parâmetro 'value' é obrigatório.");

        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) return i;// Iterar sobre os elementos do array usando um loop for, começando do índice 0 até o final do array, e comparar cada elemento com o valor fornecido (value). Se algum elemento do array for igual ao valor fornecido, retornar o índice atual (i) onde o valor foi encontrado no array
        }
        return -1;// Retornar -1 se o valor fornecido (value) não for encontrado em nenhum elemento do array após a conclusão da iteração, indicando que o valor não está presente no array
    },

    subArray: (array, start, end) => {// função para extrair um subarray de um array, que recebe três parâmetros: array, start e end. A função retorna um novo array contendo os elementos do array original desde o índice start até o índice end (inclusive). A função assume que start e end são índices válidos dentro dos limites do array.
        if (!Array.isArray(array)) // Verificar se o parâmetro fornecido (array) é realmente um array usando o método Array.isArray. Se não for um array, lançar um erro do tipo TypeError com uma mensagem indicando que o parâmetro deve ser um array
            throw new TypeError("'array' deve ser um array.");

        if (typeof start !== "number" || typeof end !== "number") // Verificar se os parâmetros start e end são do tipo número usando o operador typeof. Se algum dos parâmetros não for um número, lançar um erro do tipo TypeError com uma mensagem indicando que ambos os parâmetros devem ser números
            throw new TypeError("'start' e 'end' devem ser números.");

        if (start < 0 || end >= array.length) // Verificar se os índices start e end estão dentro dos limites do array. Se start for menor que 0 ou end for maior ou igual ao comprimento do array, lançar um erro do tipo RangeError com uma mensagem indicando que os índices estão fora dos limites, especificando o número de elementos no array
            throw new RangeError(`Índices fora dos limites. O array tem ${array.length} elementos (0 a ${array.length - 1}).`);

        if (start > end) // Verificar se o índice start é maior que o índice end, o que indicaria um intervalo inválido para a extração do subarray. Se for o caso, lançar um erro do tipo RangeError com uma mensagem indicando que start não pode ser maior do que end
            throw new RangeError("'start' não pode ser maior do que 'end'.");

        const subArray = [];// Inicializar um novo array vazio chamado subArray para armazenar os elementos extraídos do array original
        for (let i = start; i <= end; i++) {// Iterar sobre os elementos do array original usando um loop for, começando do índice start até o índice end (inclusive)
            subArray.push(array[i]);// Adicionar cada elemento do array original que está dentro do intervalo definido por start e end ao array subArray usando o método push
        }
        return subArray;// Retornar o novo array subArray que contém os elementos extraídos do array original dentro do intervalo definido por start e end
    },

    isSameLength: (arr1, arr2) => {// função para verificar se dois arrays têm o mesmo comprimento, que recebe dois parâmetros: arr1 e arr2. A função retorna true se os arrays tiverem o mesmo comprimento, ou false caso contrário.
        if (!Array.isArray(arr1) 
            || !Array.isArray(arr2)) 
            throw new TypeError("Ambos os parâmetros devem ser arrays.");

        return arr1.length === arr2.length;
    },

    reverse: (array) => {// função para inverter a ordem dos elementos em um array, que recebe um parâmetro array e retorna um novo array com os elementos na ordem inversa. A função assume que o array contém pelo menos um elemento.
        if (!Array.isArray(array)) // Verificar se o parâmetro fornecido (array) é realmente um array usando o método Array.isArray. Se não for um array, lançar um erro do tipo TypeError com uma mensagem indicando que o parâmetro deve ser um array
            throw new TypeError("'array' deve ser um array.");// Verificar se o comprimento do array é igual a 0 e lançar um erro do tipo RangeError com uma mensagem indicando que o array não pode estar vazio, pois a função precisa de pelo menos um elemento para realizar a inversão

        const arrayRev = [];// Inicializar um novo array vazio chamado arrayRev para armazenar os elementos do array original na ordem inversa
        for (let i = array.length - 1; i >= 0; i--) { // Iterar sobre os elementos do array original usando um loop for, começando do último índice (array.length - 1) até o primeiro índice (0), decrementando o índice a cada iteração
            arrayRev.push(array[i]); // Adicionar cada elemento do array original na ordem inversa ao arrayRev usando o método push
        }
        return arrayRev;
    },

    swap: (array, index1, index2) => {// função para trocar a posição de dois elementos em um array, que recebe três parâmetros: array, index1 e index2. A função retorna um novo array com os elementos nas posições index1 e index2 trocados. A função assume que index1 e index2 são índices válidos dentro dos limites do array.
        if (!Array.isArray(array)) // Verificar se o parâmetro fornecido (array) é realmente um array usando o método Array.isArray. Se não for um array, lançar um erro do tipo TypeError com uma mensagem indicando que o parâmetro deve ser um array
            throw new TypeError("'array' deve ser um array.");// Verificar se os parâmetros index1 e index2 são do tipo número usando o operador typeof. Se algum dos parâmetros não for um número, lançar um erro do tipo TypeError com uma mensagem indicando que ambos os parâmetros devem ser números

        if (typeof index1 !== "number" // Verificar se os parâmetros index1 e index2 são do tipo número usando o operador typeof. Se algum dos parâmetros não for um número, lançar um erro do tipo TypeError com uma mensagem indicando que ambos os parâmetros devem ser números
            || typeof index2 !== "number")  
            throw new TypeError("'index1' e 'index2' devem ser números.");

        if (index1 < 0 // Verificar se os índices index1 e index2 estão dentro dos limites do array. Se index1 for menor que 0 ou index2 for maior ou igual ao comprimento do array, lançar um erro do tipo RangeError com uma mensagem indicando que os índices estão fora dos limites, especificando o número de elementos no array
            || index1 >= array.length 
            || index2 < 0 
            || index2 >= array.length) 
            throw new RangeError(`Índices fora dos limites. O array tem ${array.length} elementos (0 a ${array.length - 1}).`);

        const array2 = [];    // Inicializar um novo array vazio chamado array2 para armazenar os elementos do array original, que será modificado para realizar a troca dos elementos nas posições index1 e index2
        for (let i = 0; i < array.length; i++) {
            array2.push(array[i]); 
        }
        const temp = array2[index1];// Armazenar o elemento do array2 na posição index1 em uma variável temporária chamada temp para preservar seu valor durante a troca
        array2[index1] = array2[index2];// Atribuir o valor do elemento na posição index2 do array2 para a posição index1, efetivamente movendo o elemento de index2 para index1
        array2[index2] = temp;//    Atribuir o valor armazenado na variável temp (que é o elemento original da posição index1) para a posição index2 do array2, completando a troca dos elementos nas posições index1 e index2
        return array2;
    },

    contains: (array, value) => {// função para verificar se um array contém um determinado valor, que recebe dois parâmetros: array e value. A função retorna true se o valor estiver presente em algum elemento do array, ou false caso contrário.
        if (!Array.isArray(array)) // Verificar se o parâmetro fornecido (array) é realmente um array usando o método Array.isArray. Se não for um array, lançar um erro do tipo TypeError com uma mensagem indicando que o parâmetro deve ser um array
            throw new TypeError("'array' deve ser um array.");

        if (value === undefined) // Verificar se o valor fornecido (value) é undefined, o que indica que o parâmetro value não foi fornecido. Se for o caso, lançar um erro do tipo Error com uma mensagem indicando que o parâmetro value é obrigatório
            throw new Error("O parâmetro 'value' é obrigatório.");

        for (let i = 0; i < array.length; i++) {// Iterar sobre os elementos do array usando um loop for, começando do índice 0 até o final do array, e comparar cada elemento com o valor fornecido (value). Se algum elemento do array for igual ao valor fornecido, retornar true para indicar que o valor está presente no array
            if (array[i] === value) return true;// Retornar true se o valor fornecido (value) for encontrado em algum elemento do array durante a iteração, indicando que o array contém o valor. Se a iteração for concluída sem encontrar o valor, retornar false para indicar que o valor não está presente no array
        }
        return false;
    },

    concatenate: (a1, a2) => { // função para concatenar dois arrays, que recebe dois parâmetros: a1 e a2. A função retorna um novo array que contém todos os elementos de a1 seguidos por todos os elementos de a2. A função assume que ambos os parâmetros são arrays.
        if (!Array.isArray(a1) // Verificar se os parâmetros a1 e a2 são realmente arrays usando o método Array.isArray. Se algum dos parâmetros não for um array, lançar um erro do tipo TypeError com uma mensagem indicando que ambos os parâmetros devem ser arrays
            || !Array.isArray(a2)) 
            throw new TypeError("Ambos os parâmetros devem ser arrays.");

        const array = [];
        for (let i = 0; i < a1.length; i++) {// Iterar sobre os elementos do array a1 usando um loop for, começando do índice 0 até o final do array, e adicionar cada elemento ao array
            array.push(a1[i]);// Adicionar cada elemento do array a1 ao array usando o método push para construir o novo array que conterá os elementos de a1 seguidos pelos elementos de a2
        }
        for (let i = 0; i < a2.length; i++) {
            array.push(a2[i]);
        }
        return array;
    }
};