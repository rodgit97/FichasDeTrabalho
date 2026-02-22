// function somaPrimeiros100Numeros() {
//     let soma = 0;

//     for (let i = 1; i <= 100; i++) {
//         soma += i;
//     }

//     console.log(`\n--- Exercício 9 ---`);
//     console.log(`Soma dos primeiros 100 números: ${soma}`);

//     return soma;
// }
// somaPrimeiros100Numeros();

//---------------------------------
function soma_primeiros(n){
    let soma = 0;
    for (let i = 0; i <= n; i++) {
        soma += i;        
    }
    console.log("A soma dos primeiros " 
        + n + " números é:" +soma);
}

function soma_primeiros_gauss(n){
    let soma = ( n * (n+1))/2;
    
    console.log("A soma dos primeiros " 
        + n + " números é:" +soma);
}

soma_primeiros(100);
soma_primeiros_gauss(100);