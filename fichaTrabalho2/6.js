// function desenharRetangulo(height, width) {
//   for (let i = 0; i < height; i++) {
//     for (let j = 0; j < width; j++) {
//          console.log("*");
//     }
//   }
// }
// desenharRetangulo(3, 5);

function desenharretangulo(height,width) { // Função para desenhar um retângulo de asteriscos com base na altura e largura fornecidas, usando loops aninhados para construir cada linha 

    for (let i = 0; i < height; i++) {// Loop externo que itera de 0 até a altura do retângulo, controlando o número de linhas a serem desenhadas
        let linha = ""; // Variável para construir a linha atual do retângulo, inicializada como uma string vazia no início de cada iteração do loop externo
        for (let j = 0; j < width; j++) { // Loop interno que itera de 0 até a largura do retângulo, controlando o número de asteriscos a serem adicionados à linha atual
            linha += "*"; // Adicionar um asterisco à linha atual
        }
        console.log(linha);
    }
}
desenharretangulo(6, 5); // Chamar a função desenharretangulo com altura 6 e largura 5 para desenhar um retângulo de asteriscos correspondente

// funcção de desenhar automaticamente um retangulo de asteriscos.
// contem altura e comprimento. para desenhar deixamos variavel indentico a zero, 
// menor que altura incrementamos a variavel, depois criamos outra variavel para guardar a linha,
// deixamos assim um string vazio, depois fazemos outro ciclo para o comprimento, e a cada ciclo acrescentamos ~
// um asterisco a linha, variavel menor que comprimento, incrementamos a variavel, depois de sair do ciclo do comprimento, imprimimos a linha, e assim por diante.

function retangulo(largura, altura) { // Função para desenhar um retângulo de asteriscos com base na largura e altura fornecidas, usando o método repeat para construir cada linha de forma mais eficiente
    for (let i = 0; i < altura; i++) { // Loop que itera de 0 até a altura do retângulo, controlando o número de linhas a serem desenhadas
        linha ="*".repeat(largura); // Construir a linha atual repetindo o caractere "*" a quantidade de vezes especificada pela largura
        console.log(linha);
    }
}
retangulo(5, 3);

console.log("--------verdadeira resposta-------");
function rtgl(largura, altura) {// Função para desenhar um retângulo de asteriscos com base na largura e altura fornecidas, usando o método repeat para construir cada linha de forma mais eficiente

    for (let i = 0; i < altura; i++) { // Loop que itera de 0 até a altura do retângulo, controlando o número de linhas a serem desenhadas
        linha = "*".repeat(largura); // Construir a linha atual repetindo o caractere "*" a quantidade de vezes especificada pela largura usando o método repeat, que é uma forma mais eficiente de criar uma string composta por caracteres repetidos
        console.log(linha);

    }
    console.log(linha);
}
rtgl(5, 3);  