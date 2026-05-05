function imc(peso, altura) { // Função para calcular o Índice de Massa Corporal (IMC) com base no peso e altura fornecidos, usando a fórmula do IMC que é o peso dividido pela altura ao quadrado, e imprimindo o resultado no console
    let valor = peso / (altura * altura)// Calcular o valor do IMC usando a fórmula peso / (altura * altura) e armazenar o resultado na variável valor
    console.log(valor)
}

imc(70, 1.75)// Chamar a função imc com um peso de 70 kg e uma altura de 1.75 metros para calcular e imprimir o IMC correspondente a esses valores
imc(80, 1.80)
imc(60, 1.65)