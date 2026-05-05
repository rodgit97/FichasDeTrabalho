// function imc(peso, altura) {
//     let valor = peso / (altura * altura)
//     console.log(valor)
// }

// imc(70, 1.75)
// imc(80, 1.80)
// imc(60, 1.65)

function imc(peso, altura) { // Função para calcular o Índice de Massa Corporal (IMC) e classificar o paciente com base no valor calculado
  let valor = peso / (altura * altura);// Calcular o IMC dividindo o peso pelo quadrado da altura e armazenar o resultado na variável valor
  console.log("imc do paciente: " + valor);// Imprimir o valor do IMC calculado para o paciente usando concatenação de strings para formatar a mensagem

  if (valor < 18.5) {// Verificar se o valor do IMC é menor que 18.5 para classificar o paciente como abaixo do peso
    console.log("paciente abaixo do peso");
  } else if (valor < 25) {// Verificar se o valor do IMC é menor que 25 para classificar o paciente como peso normal
    console.log("paciente com peso normal");
  } else if (valor < 30) {
    console.log("paciente acima do peso");
  } else {// Se o valor do IMC for 30 ou maior, classificar o paciente como obeso
    console.log("paciente obeso");
  }
}

imc(70, 1.75);// O IMC de um paciente com peso 70 kg e altura 1.75 m é aproximadamente 22.86, o que classifica o paciente como peso normal
imc(80, 1.8);
imc(60, 1.65);
console.log("------------------------------");
imc(45, 1.9);
imc(48, 1.6);
imc(76, 1.7);
imc(100, 1.75);
