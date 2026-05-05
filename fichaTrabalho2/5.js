// function tempoTrabalho(entrada, saida) {
//   const inicialMin = 8 * 60;
//   const finalMin = 18 * 60;

//   // let arrai_entrada = entrada.split(":");
//   // let arrai_saida = saida.split(":");

//   // let entradaMin = arrai_entrada[0]*60 + arrai_entrada[1];
//   // let saidaMin = arrai_saida[0]*60 + arrai_saida[1];

//   // console.log(entradaMin);
//   // console.log(saidaMin);

//   let arrai_entrada = entrada.split(":").map(Number);

//   let [horas, minutos] = entrada.split(":").map(Number);

//   let [entrada, entradaM] = entrada.split(":").map(Number);
//   let [saida, saidaM] = saida.split(":").map(Number);

//   let entradaMin = entrada * 60 + entradaM;
//   let saidaMin = saida * 60 + saidaM;

//   console.log(arrai_entrada);

//   if (entradaMin < inicialMin || saidaM > finalMin) {
//     console.log("os valores estão fora do horário de trabalho");
//   }

//   if (entradaMin > saidaM) {
//     console.log("a hora de entrada é maior que a hora de saída");
//   }

//     let tempoMin = saidaMin - entradaMin;
//     horas = Math.floor(tempoMin / 60);
//     min = tempoMin % 60;

//     console.log(`o horario de trabalho é de ${horas} : ${min}`);

// }
// tempoTrabalho("09:30", "17:45");

function horarioTrabalho(entrada, saida) {//  Função para calcular o tempo de trabalho com base na hora de entrada e saída, verificando se os horários estão dentro do período permitido e se a hora de entrada é anterior à hora de saída
    const inicioMin = 8*60; // Definir o horário de início do trabalho em minutos (8 horas convertidas para minutos)
    const fimMin = 18*60;

    let[entradaH, entradaM]= entrada.split(":").map(Number); // Dividir a hora de entrada em horas e minutos usando split() para separar a string com base no caractere ":" e map(Number) para converter as partes resultantes em números, armazenando as horas na variável entradaH e os minutos na variável entradaM
    let[saidaH, saidaM]= saida.split(":").map(Number);  

    let entradaMin = entradaH*60 + entradaM;// Converter a hora de entrada para minutos multiplicando as horas por 60 e somando os minutos, armazenando o resultado na variável entradaMin
    let saidaMin = saidaH*60 + saidaM;

    if (entradaMin < inicioMin || saidaMin > fimMin) { // Verificar se a hora de entrada é anterior ao horário de início permitido ou se a hora de saída é posterior ao horário de fim permitido. Se qualquer uma dessas condições for verdadeira, imprimir uma mensagem indicando que os horários estão fora do período permitido e retornar para encerrar a função
        console.log("estão fora do horario"); 
        return;// Se a hora de entrada for menor que o horário de início permitido ou se a hora de saída for maior que o horário de fim permitido, imprimir uma mensagem indicando que os horários estão fora do período permitido e retornar para encerrar a função
    }

    if (entradaMin > saidaMin) { // Verificar se a hora de entrada é posterior à hora de saída. Se for, imprimir uma mensagem indicando que a hora de entrada deve ser anterior à hora de saída e retornar para encerrar a função
        console.log("tem de ser anterior a saida");
    return;
    }
    let tempoMin = saidaMin - entradaMin; // Calcular o tempo total de trabalho em minutos subtraindo a hora de entrada (em minutos) da hora de saída (em minutos) e armazenando o resultado na variável tempoMin
    horas = Math.floor(tempoMin/60); // 
    min = tempoMin % 60; // Calcular o número de horas inteiras dividindo o tempo total em minutos por 60 usando Math.floor() para arredondar para baixo, e calcular os minutos restantes usando o operador módulo (%) para obter o resto da divisão do tempo total em minutos por 60, armazenando os resultados nas variáveis horas e min, respectivamente

    console.log(`o horario de trabalho é de ${horas} : ${min}`);
}
horarioTrabalho("09:30", "17:45");