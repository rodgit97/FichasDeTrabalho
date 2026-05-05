function imprimirMes(numMes) { // imprimir o nome do mês correspondente ao número fornecido
  if (numMes < 1 || numMes > 12) { // Verificar se o número do mês está fora do intervalo permitido (1 a 12)
    console.log("o numero deve estar entre 1 e 12"); // Se o número do mês estiver fora do intervalo permitido, imprimir uma mensagem de erro indicando que o número deve estar entre 1 e 12
  }
  let mes = [// Criar um array com os nomes dos meses, onde o índice corresponde ao número do mês (1 para janeiro, 2 para fevereiro, etc.)
    "janeiro",// O índice 0 é deixado vazio para que o índice 1 corresponda a janeiro
    "fevereiro",
    "marco",
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

  console.log(mes[numMes]);// Imprimir o nome do mês correspondente ao número fornecido usando a notação de colchetes para acessar o elemento do array
}
imprimirMes(1);// O número 1 corresponde a janeiro, então "janeiro" é impresso
imprimirMes(2);
imprimirMes(3);
imprimirMes(4);
imprimirMes(5);
imprimirMes(6);
imprimirMes(7);
imprimirMes(8);

console.log("-----------------------------------")

// //  ========================================
function imprimirNomeMes(numeroMes) {// imprimir o nome do mês correspondente ao número fornecido
    const meses = [// Criar um array com os nomes dos meses, onde o índice corresponde ao número do mês (1 para janeiro, 2 para fevereiro, etc.)
        "Janeiro", "Fevereiro", "Março", "Abril",// O índice 0 é deixado vazio para que o índice 1 corresponda a janeiro
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    console.log(`\n--- Exercício 6 ---`);

    if (numeroMes >= 1 && numeroMes <= 12) {// Verificar se o número do mês está dentro do intervalo permitido (1 a 12)
        console.log(`Mês ${numeroMes}: ${meses[numeroMes - 1]}`);// Se o número do mês estiver dentro do intervalo permitido, imprimir o nome do mês correspondente usando a notação de colchetes para acessar o elemento do array (subtraindo 1 para ajustar ao índice)
    } else {
        console.log(`Número de mês inválido: ${numeroMes}`);// Se o número do mês estiver fora do intervalo permitido, imprimir uma mensagem de erro indicando que o número de mês é inválido
    }
}

imprimirNomeMes(3);// O número 3 corresponde a março, então "Março" é impresso
imprimirNomeMes(12);
imprimirNomeMes(13);// O número 13 está fora do intervalo permitido, então uma mensagem de erro é impressa

console.log("-----------------------------------")

function imprimirMes(numMes) {// imprimir o nome do mês correspondente ao número fornecido
  if (numMes < 1 || numMes > 12) { // Verificar se o número do mês está fora do intervalo permitido (1 a 12)
    console.log("o numero deve estar entre 1 e 12");// Se o número do mês estiver fora do intervalo permitido, imprimir uma mensagem de erro indicando que o número deve estar entre 1 e 12
    return; // Retornar para evitar que o código continue executando e tente acessar um índice inválido do array
  }

  let mes = [// Criar um array com os nomes dos meses, onde o índice corresponde ao número do mês (1 para janeiro, 2 para fevereiro, etc.)
    "janeiro", "fevereiro", "março", "abril",
    "maio", "junho", "julho", "agosto",
    "setembro", "outubro", "novembro", "dezembro"
  ];

  console.log(mes[numMes - 1]); // Imprimir o nome do mês correspondente ao número fornecido usando a notação de colchetes para acessar o elemento do array (subtraindo 1 para ajustar ao índice)
  // ✅ Colchetes e -1
}
console.log("-----------------------------------")

function nomedomes(num) {// imprimir o nome do mês correspondente ao número fornecido
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
  console.log(nomes[num]);// Imprimir o nome do mês correspondente ao número fornecido usando a notação de colchetes para acessar o elemento do array
}
nomedomes(1);// O número 1 corresponde a janeiro, então "janeiro" é impresso
nomedomes(16);// O número 16 está fora do intervalo permitido, mas a função não tem validação, então "undefined" é impresso
nomedomes(26);
nomedomes(8);
nomedomes(5);
console.log("-----------------------------------")

//------------------------------------
console.log("--------//---------");
function nomedomes2(num) {// imprimir o nome do mês correspondente ao número fornecido com validação
  if (num < 1 || num > 12) {// Verificar se o número do mês está fora do intervalo permitido (1 a 12)
    console.log("deve estar entre 1 e 12");// Se o número do mês estiver fora do intervalo permitido, imprimir uma mensagem de erro indicando que o número deve estar entre 1 e 12
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
