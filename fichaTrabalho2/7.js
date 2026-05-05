// function triangulo(altura) {
//     for (let i = 0; i < altura; i++) {
//         linha = "*".repeat(i +1);
//         console.log(linha);
//     }
// }
// triangulo(10);

function triangle(altura) { // Função para desenhar um triângulo de asteriscos com base na altura fornecida, usando um loop para construir cada linha do triângulo
    for (let i = 0; i < altura; i++) { // Loop que itera de 0 até a altura do triângulo, controlando o número de linhas a serem desenhadas
        linha = "*".repeat(i + 1); // Construir a linha atual repetindo o caractere "*" a quantidade de vezes igual ao índice do loop mais 1, o que cria um padrão de triângulo onde a primeira linha tem 1 asterisco, a segunda linha tem 2 asteriscos, e assim por diante
        console.log(linha);
        
    }
}
triangle(10);