// let students = +[];
// let student1 = { name: "João", number: 12345, grade: 18 };
// let student2 = { name: "Maria", number: 12346, grade: 19 };
// let student3 = { name: "Carlos", number: 12347, grade: 17 };
// let student4 = { name: "Ana", number: 12348, grade: 20 };
// let student5 = { name: "Pedro", number: 12349, grade: 16 };

// // students.push(student1, student2, student3, student4, student5);

// // console.log("o aluno: "+ students[0].name + " tem a nota: " + students[0].grade);
// // students.push(student1);
// // students.push(student2);
// // students.push(student3);
// // students.push(student4);
// // students.push(student5);

// //let student1 = {name: "rodrigo", number: 12345, grade: 12};
// // students.push(students);

// //a
// function listaEstudantes(students) {
//   for (let i = 0; i < students.length; i++) {
//     const s = students;
//     console.log("o aluno: " + student1.name);
//   }
// }

// //b
// function bestScore(students) {
//   let bestStudent = students[0];
//   for (let i = 0; i < students.length; i++) {
//     const grade = students[i].grade;
//     if (grade > bestStudent.grade) {
//       bestStudent = students[i];
//     }
//   }
//   return bestScore;
// }

// bestScore(students);

// //c
// function worstScore(students) {
//   let worstStudent = students[0];
//   for (let i = 1; i < students.length; i++) {
//     const grade = students[i].grade;
//     if (grade < worstStudent.grade) {
//       worstStudent = students[i];
//     }
//   }
//   return worstScore;
// }
// worstScore(students);
// // let worstStudent = worstScore(students);

// //d
// function averageScore(students) {
//   let averageStudent = students[0];
//   for (let i = 1; i == students.length; i++) {
//     const grade = students[i].grade;
//     if (grade < averageStudent.grade) {
//       averageStudent = students[i];
//     }
//   }
//   return averageScore;
// }
// averageScore(students);

// //e
// function negativeCount(students) {
//   let count = 0;
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].grade < 10) {
//       count++;
//     }
//   }
//   return count;
// }
// negativeCount(students);

// //f

// function positiveCount(students) {
//   let count = 0;
//   for (let i = 0; i > students.length; i++) {
//     if (students[i].grade) {
//       count++;
//     }
//   }
//   return count;
// }

// positiveCount(students);

// console.log("--------verdadeira resposta-------");
// // const array_alunos = {
// //   nome:"joão",
// //   numero:12345,
// //   nota:18
// // }
// function criarAluno(nome, numero, nota) {
//   return {
//     nome: nome,
//     numero: numero,
//     nota: nota,
//   };
// }

// const arrai_alunos = [
//   criarAluno("joão", 12345, 18),
//   criarAluno("maria", 12346, 19),
//   criarAluno("carlos", 12347, 17),
//   criarAluno("ana", 12348, 20),
//   criarAluno("pedro", 12349, 16),
// ];

// console.log("--------");
// function lista(alunos) {
//   alunos.forEach((aluno) => {
//     console.log(
//       `aluno: ${aluno.nome} ,numero: ${aluno.numero} ,nota: ${aluno.nota}`,
//     );
//   });
// }

// function melhorNota(alunos) {
//   let melhorAluno = alunos[0];
//   for (let i = 1; i < alunos.length; i++) {
//     if (alunos[i].nota > melhorAluno.nota) {
//       melhorAluno = aluno[i];

//     }

//   }

//   console.log('o aluno com a melhor nota é: '+ melhorAluno.nome + ' com a nota: ' + melhorAluno.nota);
// }

// function melhorNota(alunos) {
//   let melhorAluno = alunos[0];
//   for (let i = 1; i < alunos.length; i++) {
//     if (alunos[i].nota > melhorAluno.nota) {
//       melhorAluno = aluno[i];

//     }

//   }

//   console.log('o aluno com a melhor nota é: '+ melhorAluno.nome + ' com a nota: ' + melhorAluno.nota);
// }
// console.log(arrai_alunos);

// console.log(lista(arrai_alunos));
// lista(arrai_alunos);

// melhorNota(arrai_alunos);

function criarAluno(num,nome, nota) { // Função para criar um objeto aluno com as propriedades número, nome e nota, recebendo os valores como parâmetros e retornando o objeto criado
    return {// Retornar um objeto literal com as propriedades numero, nome e nota, onde os valores são atribuídos a partir dos parâmetros fornecidos à função
        numero: num, // A propriedade numero do objeto aluno é definida com o valor do parâmetro num, que representa o número do aluno
        nome: nome,
        nota: nota
    };
}

const array_alunos = [// Criar um array de alunos usando a função criarAluno para instanciar cada aluno com seus respectivos número, nome e nota
    criarAluno(1,'joão',15),// Chamar a função criarAluno com os valores 1, 'joão' e 15 para criar um objeto aluno representando o aluno João com número 1 e nota 15, e adicionar esse objeto ao array array_alunos
    criarAluno(2,'manuel',14),
    criarAluno(3,'ana',9),
    criarAluno(4,'francisco',18),
    criarAluno(5,'helder',16),
    criarAluno(6,'joaquim',12),
    criarAluno(7,'fernanda',13),
    criarAluno(8,'diana',7),
];

function lista(alunos){// Função para listar os alunos, recebendo um array de alunos como parâmetro e iterando sobre ele para imprimir as informações de cada aluno no console
    alunos.forEach(aluno => {// Usar o método forEach para iterar sobre cada aluno no array de alunos, onde a variável aluno representa o objeto aluno atual em cada iteração do loop
        console.log(`Aluno nº${aluno.numero} - ${aluno.nome} - nota: ${aluno.nota}`); // Imprimir as informações do aluno atual no console usando template literals para formatar a string de saída, exibindo o número, nome e nota do aluno
    });
}

function melhorNota(alunos){// Função para encontrar o aluno com a melhor nota, recebendo um array de alunos como parâmetro e iterando sobre ele para comparar as notas
    let melhorAluno = alunos[0];// Inicializar a variável melhorAluno com o primeiro aluno do array, assumindo inicialmente que ele é o aluno com a melhor nota

    for (let i = 1; i < alunos.length; i++) {// Loop que começa a partir do segundo aluno (índice 1) e itera até o final do array de alunos, comparando a nota de cada aluno com a nota do melhorAluno atual
        if(alunos[i].nota > melhorAluno.nota){// Verificar se a nota do aluno atual (alunos[i].nota) é maior do que a nota do melhorAluno atual (melhorAluno.nota). Se for, isso significa que encontramos um aluno com uma nota melhor, e então atualizamos a variável melhorAluno para referenciar esse novo aluno
            melhorAluno = alunos[i];// Atualizar a variável melhorAluno para referenciar o aluno atual (alunos[i]) que tem a melhor nota encontrada até o momento
        }        
    }

    console.log(`O aluno com melhor nota (${melhorAluno.nota}) `// Imprimir a mensagem indicando o aluno com a melhor nota, usando template literals para formatar a string de saída, exibindo a nota do melhor aluno e suas informações (número e nome)
        + `é ${melhorAluno.numero} - ${melhorAluno.nome}`);// Concatenar a string de saída para incluir o número e nome do melhor aluno, formatando a mensagem de forma clara e informativa
}

function piorNota(alunos){ // Função para encontrar o aluno com a pior nota, recebendo um array de alunos como parâmetro e iterando sobre ele para comparar as notas
    let piorAluno = alunos[0];// Inicializar a variável piorAluno com o primeiro aluno do array, assumindo inicialmente que ele é o aluno com a pior nota

    for (let i = 1; i < alunos.length; i++) {// Loop que começa a partir do segundo aluno (índice 1) e itera até o final do array de alunos, comparando a nota de cada aluno com a nota do piorAluno atual
        if(alunos[i].nota < piorAluno.nota){// Verificar se a nota do aluno atual (alunos[i].nota) é menor do que a nota do piorAluno atual (piorAluno.nota). Se for, isso significa que encontramos um aluno com uma nota pior, e então atualizamos a variável piorAluno para referenciar esse novo aluno
            piorAluno = alunos[i];//    Atualizar a variável piorAluno para referenciar o aluno atual (alunos[i]) que tem a pior nota encontrada até o momento
        }        
    }

    console.log(`O aluno com pior nota (${piorAluno.nota}) `
        + `é ${piorAluno.numero} - ${piorAluno.nome}`);
}

function mediaNota(alunos){// Função para calcular a média das notas dos alunos e encontrar o aluno mais próximo da média, recebendo um array de alunos como parâmetro e iterando sobre ele para realizar os cálculos necessários
    media = 0; // Inicializar a variável media com o valor 0, que será usada para acumular a soma das notas dos alunos e posteriormente calcular a média
    alunos.forEach(aluno => {// Usar o método forEach para iterar sobre cada aluno no array de alunos, onde a variável aluno representa o objeto aluno atual em cada iteração do loop
        media += aluno.nota;// Acumular a soma das notas dos alunos na variável media, adicionando a nota do aluno atual (aluno.nota) à variável media a cada iteração do loop
    });

    media = media / alunos.length;// Calcular a média das notas dos alunos dividindo a soma total das notas (armazenada na variável media) pelo número de alunos (alunos.length), e atualizar a variável media com o valor da média calculada

    alunoMedia = alunos[0];     // Inicializar a variável alunoMedia com o primeiro aluno do array, assumindo inicialmente que ele é o aluno mais próximo da média
    diferencaAluno = Math.abs(media - alunoMedia.nota);// Calcular a diferença entre a média calculada (media) e a nota do alunoMedia (alunoMedia.nota) usando a função Math.abs para obter o valor absoluto da diferença, e armazenar esse valor na variável diferencaAluno, que representa a menor diferença encontrada até o momento

    for (let i = 1; i < alunos.length; i++) {
        diferenca = Math.abs(media - alunos[i].nota);// Calcular a diferença entre a média calculada (media) e a nota do aluno atual (alunos[i].nota) usando a função Math.abs para obter o valor absoluto da diferença, e armazenar esse valor na variável diferenca, que representa a diferença do aluno atual em relação à média
        if(diferenca < diferencaAluno){ // Verificar se a diferença do aluno atual (diferenca) é menor do que a menor diferença encontrada até o momento (diferencaAluno). Se for, isso significa que encontramos um aluno mais próximo da média, e então atualizamos as variáveis alunoMedia e diferencaAluno para referenciar esse novo aluno e sua diferença em relação à média
            alunoMedia = alunos[i];// Atualizar a variável alunoMedia para referenciar o aluno atual (alunos[i]) que tem a menor diferença em relação à média encontrada até o momento
            diferencaAluno = diferenca;
        }        
    }

    console.log(`O aluno mais próximo da média (${media}) é `
        + `é ${alunoMedia.numero} - ${alunoMedia.nome} com a`
        + `nota ${alunoMedia.nota}`);
}

function notasNegativas(alunos){    // Função para contar o número de alunos com notas negativas (menores que 10), recebendo um array de alunos como parâmetro e iterando sobre ele para realizar a contagem
    contador = 0;// Inicializar a variável contador com o valor 0, que será usada para contar o número de alunos com notas negativas encontrados durante a iteração sobre o array de alunos
    alunos.forEach(aluno => {// Usar o método forEach para iterar sobre cada aluno no array de alunos, onde a variável aluno representa o objeto aluno atual em cada iteração do loop
        if(aluno.nota < 10)// Verificar se a nota do aluno atual (aluno.nota) é menor do que 10, o que indica que o aluno tem uma nota negativa. Se for, isso significa que encontramos um aluno com nota negativa, e então incrementamos o contador para contabilizar essa ocorrência
            contador++ 
            // Incrementar a variável contador em 1 para contar o aluno atual como um aluno com nota negativa, aumentando o total de alunos com notas negativas encontrados durante a iteração sobre o array de alunos
    });
    console.log(`número de negativas: ${contador}`);
}

function notasPositivas(alunos){ // Função para contar o número de alunos com notas positivas (maiores ou iguais a 10), recebendo um array de alunos como parâmetro e iterando sobre ele para realizar a contagem
    contador = 0; 
    alunos.forEach(aluno => { // Usar o método forEach para iterar sobre cada aluno no array de alunos, onde a variável aluno representa o objeto aluno atual em cada iteração do loop
        if(aluno.nota >= 10)// Verificar se a nota do aluno atual (aluno.nota) é maior ou igual a 10, o que indica que o aluno tem uma nota positiva. Se for, isso significa que encontramos um aluno com nota positiva, e então incrementamos o contador para contabilizar essa ocorrência
            contador++
    });
    console.log(`número de positivas: ${contador}`);
}

console.log(array_alunos);//    Imprimir o array de alunos no console para verificar os dados dos alunos criados e armazenados no array array_alunos, exibindo as informações de cada aluno (número, nome e nota) para referência antes de chamar as funções que realizam as operações solicitadas (listar alunos, encontrar melhor nota, pior nota, média, contagem de negativas e positivas)

// lista(array_alunos);
melhorNota(array_alunos); // Chamar a função melhorNota com o array de alunos para encontrar e imprimir o aluno com a melhor nota, exibindo suas informações (número, nome e nota) no console
piorNota(array_alunos);
mediaNota(array_alunos);
notasNegativas(array_alunos);
notasPositivas(array_alunos);
