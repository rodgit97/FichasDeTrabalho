// function calculadora(num1, num2, operador) {
//     let resultado;

//     console.log(`Operação: ${num1} ${operador} ${num2}`);

//     switch(operador) {
//         case '+':
//             resultado = num1 + num2;
//             break;
//         case '-':
//             resultado = num1 - num2;
//             break;
//         case '*':
//             resultado = num1 * num2;
//             break;
//         case '/':
//             if (num2 === 0) {
//                 console.log("Erro: Divisão por zero!");
//                 return;
//             }
//             resultado = num1 / num2;
//             break;
//         case '^':
//             resultado = Math.pow(num1, num2);
//             break;
//         default:
//             console.log("Operador inválido!");
//             return;
//     }

//     console.log(`Resultado: ${resultado}`);
// }

// // Testes
// calculadora(10, 5, '+');
// calculadora(10, 5, '-');
// calculadora(10, 5, '*');
// calculadora(10, 5, '/');
// calculadora(2, 3, '^');

function calculadora(n1, n2, operacao) {
  let res = 0;
  switch (operacao) {
    case "+":
      res = n1 + n2;
      break;
    case "-":
      res = n1 - n2;
      break;
    case "*":
      res = n1 * n2;
      break;
    case "/":
      res = n1 / n2;
      break;

    case "^":
      res = n1 ** n2;
      break;
    default:
      console.log("a operação é invalida");
      return;
      break;
  }
  console.log(
    "o resultado da operaçao " + n1 + " " + operacao + " " + n2 + " é " + res,
  );
}

calculadora(34, 56, "+");
calculadora(34, 56, "-");
calculadora(34, 56, "*");
calculadora(34, 56, "/");
calculadora(34, 56, "^");
calculadora(34, 56, "fd");
