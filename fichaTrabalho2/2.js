function inversao(frase) {
  let stringFinal = frase.split(" ").reverse().join(" ");
  console.log(stringFinal);
}
frase = "aranhas são animais";
inversao(frase);

console.log("--------verdadeira resposta-------");

function invertirString(string) {
  let stringFinal = string.split("").reverse().join("");
  console.log(stringFinal);
}
invertirString("Olá Mundo");

console.log("--------");

function inverterPalavrasString(string) {
  let stringFinal = string
    .split(" ")
    .map((palavra) => palavra.split("").reverse().join(""));
  console.log(stringFinal);
}
inverterPalavrasString("hoje é domingo");

console.log("----outra alternativa----");

function maisInvertacao(string) {
  let arrayDeStrings = string.split(" ");
  let arrayinvertida = arrayDeStrings.reverse();
  let stringFinal = arrayinvertida.join(" ");
  console.log(stringFinal);
}
maisInvertacao("amanha é sexta");

console.log("----outra alternativa----");

function inversao(string) {
  let arrayDeStrings = string.split(" ");
  let arrayinvertida = arrayDeStrings.reverse();
  let stringFinal = string.split("").reverse().join("");
  console.log(stringFinal);
}
inversao("amanha é sexta");
