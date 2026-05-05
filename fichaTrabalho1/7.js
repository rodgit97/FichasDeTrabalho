function calculadora(num1, num2, operador) {// Função que realiza operações matemáticas básicas entre dois números com base no operador fornecido
    let resultado;// Variável para armazenar o resultado da operação

    console.log(`Operação: ${num1} ${operador} ${num2}`); // Imprimir a operação que está sendo realizada usando template literals para formatar a string

    switch(operador) {// Estrutura de controle para determinar qual operação realizar com base no operador fornecido
        case '+':// Se o operador for '+', realizar a adição
            resultado = num1 + num2;// Calcular a soma de num1 e num2 e armazenar o resultado
            break;// Sair do switch após realizar a operação
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {// Verificar se o segundo número é zero antes de realizar a divisão para evitar divisão por zero
                console.log("Erro: Divisão por zero!");// Se num2 for zero, imprimir uma mensagem de erro indicando que a divisão por zero não é permitida
                return;// Retornar para evitar que o código continue executando e tente realizar a divisão por zero
            }
            resultado = num1 / num2;
            break;
        case '^':// Se o operador for '^', realizar a exponenciação
            resultado = Math.pow(num1, num2);// Calcular num1 elevado à potência de num2 usando a função Math.pow() e armazenar o resultado
            break;
        default:// Se o operador fornecido não for reconhecido, imprimir uma mensagem de erro indicando que o operador é inválido
            console.log("Operador inválido!");
            return;
    }

    console.log(`Resultado: ${resultado}`);// Imprimir o resultado da operação usando template literals para formatar a string
}

// Testes
calculadora(10, 5, '+');// Realiza a adição de 10 e 5, resultando em 15
calculadora(10, 5, '-');
calculadora(10, 5, '*');
calculadora(10, 5, '/');
calculadora(2, 3, '^');
console.log("-----------------------------------")

function calculadora(n1, n2, operacao) {// Função que realiza operações matemáticas básicas entre dois números com base no operador fornecido
  let res = 0;// Variável para armazenar o resultado da operação
  switch (operacao) {// Estrutura de controle para determinar qual operação realizar com base no operador fornecido
    case "+":// Se o operador for '+', realizar a adição
      res = n1 + n2;// Calcular a soma de n1 e n2 e armazenar o resultado
      break;// Sair do switch após realizar a operação
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
    default:// Se o operador fornecido não for reconhecido, imprimir uma mensagem de erro indicando que a operação é inválida
      console.log("a operação é invalida");// Imprimir uma mensagem de erro indicando que a operação é inválida
      return;// Retornar para evitar que o código continue executando e tente realizar uma operação inválida
      break;
  }
  console.log(
    "o resultado da operaçao " + n1 + " " + operacao + " " + n2 + " é " + res,// Imprimir o resultado da operação usando concatenação de strings para formatar a mensagem
  );
}

calculadora(34, 56, "+");
calculadora(34, 56, "-");
calculadora(34, 56, "*");
calculadora(34, 56, "/");
calculadora(34, 56, "^");
calculadora(34, 56, "fd");// O operador "fd" é inválido, então uma mensagem de erro é impressa
