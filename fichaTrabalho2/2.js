function inversao(frase) {// Função para inverter a ordem das palavras em uma frase
  let stringFinal = frase.split(" ").reverse().join(" ");// Dividir a frase em um array de palavras usando split(" "), inverter a ordem das palavras com reverse() e juntar as palavras de volta em uma string usando join(" ")
  console.log(stringFinal);// Imprimir a frase com as palavras invertidas usando console.log
}
frase = "aranhas são animais";
inversao(frase);// A frase "aranhas são animais" é invertida para "animais são aranhas" e impressa no console

console.log("--------verdadeira resposta-------");

function invertirString(string) { // Função para inverter a ordem dos caracteres em uma string
  let stringFinal = string.split("").reverse().join("");// Dividir a string em um array de caracteres usando split(""), inverter a ordem dos caracteres com reverse() e juntar os caracteres de volta em uma string usando join("")
  console.log(stringFinal);// Imprimir a string com os caracteres invertidos usando console.log
}
invertirString("Olá Mundo");// A string "Olá Mundo" é invertida para "odnuM álO" e impressa no console

console.log("--------");

function inverterPalavrasString(string) {// Função para inverter a ordem dos caracteres em cada palavra de uma string, mantendo a ordem das palavras
  let stringFinal = string // Dividir a string em um array de palavras usando split(" "), para cada palavra, dividir em caracteres, inverter a ordem dos caracteres e juntar de volta, e finalmente juntar as palavras de volta em uma string usando join(" ")
    .split(" ") // Dividir a string em um array de palavras usando split(" ")
    .map((palavra) => palavra.split("").reverse().join(""));// Para cada palavra no array, dividir a palavra em um array de caracteres usando split(""), inverter a ordem dos caracteres com reverse() e juntar os caracteres de volta em uma string usando join("")
  console.log(stringFinal);
}
inverterPalavrasString("hoje é domingo");

console.log("----outra alternativa----");

function maisInvertacao(string) {// Função para inverter a ordem das palavras em uma string, mantendo a ordem dos caracteres em cada palavra
  let arrayDeStrings = string.split(" ");// Dividir a string em um array de palavras usando split(" ") para criar um array onde cada elemento é uma palavra da string original
  let arrayinvertida = arrayDeStrings.reverse();// Inverter a ordem das palavras no array usando reverse() para que a última palavra se torne a primeira e assim por diante
  let stringFinal = arrayinvertida.join(" ");// Juntar as palavras do array invertido de volta em uma string usando join(" ") para criar a string final com as palavras na ordem invertida
  console.log(stringFinal);
}
maisInvertacao("amanha é sexta");

console.log("----outra alternativa----");

function inversao(string) {// Função para inverter a ordem dos caracteres em uma string, mantendo a ordem das palavras
  let arrayDeStrings = string.split(" ");// Dividir a string em um array de palavras usando split(" ") para criar um array onde cada elemento é uma palavra da string original
  let arrayinvertida = arrayDeStrings.reverse();
  let stringFinal = string.split("").reverse().join("");// Dividir a string em um array de caracteres usando split(""), inverter a ordem dos caracteres com reverse() e juntar os caracteres de volta em uma string usando join("") para criar a string final com os caracteres na ordem invertida
  console.log(stringFinal);
}
inversao("amanha é sexta");


// -----------------------------------
console.log("--------IMC-------");
function inverteString(string){     // Função para inverter a ordem dos caracteres em uma string
    // let arrayDeStrings = string.split("");
    // let arrayInvertido = arrayDeStrings.reverse();
    // let stringFinal = arrayInvertido.join("");

    let stringFinal = string.split("").reverse().join("");// Dividir a string em um array de caracteres usando split(""), inverter a ordem dos caracteres com reverse() e juntar os caracteres de volta em uma string usando join("") para criar a string final com os caracteres na ordem invertida
    console.log(stringFinal);
}

function invertePalavrasDaString(string){// Função para inverter a ordem dos caracteres em cada palavra de uma string, mantendo a ordem das palavras
    let stringFinal = string.split(" ").map( // Dividir a string em um array de palavras usando split(" "), para cada palavra, dividir em caracteres, inverter a ordem dos caracteres e juntar de volta, e finalmente juntar as palavras de volta em uma string usando join(" ")
        (palavra) => palavra.split("").reverse().join("")// Para cada palavra no array, dividir a palavra em um array de caracteres usando split(""), inverter a ordem dos caracteres com reverse() e juntar os caracteres de volta em uma string usando join("")
    ).join(" ");// Juntar as palavras do array resultante de volta em uma string usando join(" ") para criar a string final com as palavras na ordem original, mas com os caracteres de cada palavra invertidos
    console.log(stringFinal);
}

inverteString("Hoje é Domingo");// A string "Hoje é Domingo" é invertida para "odgniM é ejO" e impressa no console
invertePalavrasDaString("Hoje é Domingo");// As palavras "Hoje", "é" e "Domingo" são invertidas para "ejO", "é" e "odgniM", respectivamente, e a string resultante "ejO é odgniM" é impressa no console