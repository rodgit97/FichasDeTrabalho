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

function horarioTrabalho(entrada, saida) {
    const inicioMin = 8*60;
    const fimMin = 18*60;

    let[entradaH, entradaM]= entrada.split(":").map(Number);
    let[saidaH, saidaM]= saida.split(":").map(Number);

    let entradaMin = entradaH*60 + entradaM;
    let saidaMin = saidaH*60 + saidaM;

    if (entradaMin < inicioMin || saidaMin > fimMin) {
        console.log("estão fora do horario");
        return;
    }

    if (entradaMin > saidaMin) {
        console.log("tem de ser anterior a saida");
    return;
    }
    let tempoMin = saidaMin - entradaMin;
    horas = Math.floor(tempoMin/60);
    min = tempoMin % 60;

    console.log(`o horario de trabalho é de ${horas} : ${min}`);
}
horarioTrabalho("09:30", "17:45");