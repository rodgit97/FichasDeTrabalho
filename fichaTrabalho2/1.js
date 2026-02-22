// function imc(peso, altura) {
//     let valor = peso / (altura * altura)
//     console.log(valor)
// }

// imc(70, 1.75)
// imc(80, 1.80)
// imc(60, 1.65)

function imc(peso, altura) {
  let valor = peso / (altura * altura);
  console.log("imc do paciente: " + valor);

  if (valor < 18.5) {
    console.log("paciente abaixo do peso");
  } else if (valor < 25) {
    console.log("paciente com peso normal");
  } else if (valor < 30) {
    console.log("paciente acima do peso");
  } else {
    console.log("paciente obeso");
  }
}

imc(70, 1.75);
imc(80, 1.8);
imc(60, 1.65);
console.log("------------------------------");
imc(45, 1.9);
imc(48, 1.6);
imc(76, 1.7);
imc(100, 1.75);
