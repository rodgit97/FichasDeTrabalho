// function desenharRetangulo(height, width) {
//   for (let i = 0; i < height; i++) {
//     for (let j = 0; j < width; j++) {
//          console.log("*");
//     }
//   }
// }
// desenharRetangulo(3, 5);

function desenharretangulo(height,width) {
    for (let i = 0; i < height; i++) {
        let linha = "";
        for (let j = 0; j < width; j++) {
            linha += "*";
        }
        console.log(linha);
    }
}
desenharretangulo(6, 5);

// funcção de desenhar automaticamente um retangulo de asteriscos.
// contem altura e comprimento. para desenhar deixamos variavel indentico a zero, 
// menor que altura incrementamos a variavel, depois criamos outra variavel para guardar a linha,
// deixamos assim um string vazio, depois fazemos outro ciclo para o comprimento, e a cada ciclo acrescentamos ~
// um asterisco a linha, variavel menor que comprimento, incrementamos a variavel, depois de sair do ciclo do comprimento, imprimimos a linha, e assim por diante.
