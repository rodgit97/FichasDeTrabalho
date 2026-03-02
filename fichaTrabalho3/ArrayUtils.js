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

module.exports = {
    isEmpty : (array) =>{
        return array.length===0;
    },

    max: (array) => {
        let max = array[0];
        for (let i = 1; i < array.length; i++){
            if(array[i] > max)
                max = array[i];       
        }
        return max;
    },

    min:(array) => {
        let min = array[0];
        for (let i = 1; i < array.length; i++){
            if(array[i] < min)
                min = array[i];       
        }
        return min;
    },

    average:(array) => {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            
        }
        return sum / array.length;
    },

    indeOf:(array, value) => {
        
    }
}