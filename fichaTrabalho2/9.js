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

function criarAluno(num,nome, nota) {
    return {
        numero: num,
        nome: nome,
        nota: nota
    };
}

const array_alunos = [
    criarAluno(1,'joão',15),
    criarAluno(2,'manuel',14),
    criarAluno(3,'ana',9),
    criarAluno(4,'francisco',18),
    criarAluno(5,'helder',16),
    criarAluno(6,'joaquim',12),
    criarAluno(7,'fernanda',13),
    criarAluno(8,'diana',7),
];

function lista(alunos){
    alunos.forEach(aluno => {
        console.log(`Aluno nº${aluno.numero} - ${aluno.nome} - nota: ${aluno.nota}`);
    });
}

function melhorNota(alunos){
    let melhorAluno = alunos[0];

    for (let i = 1; i < alunos.length; i++) {
        if(alunos[i].nota > melhorAluno.nota){
            melhorAluno = alunos[i];
        }        
    }

    console.log(`O aluno com melhor nota (${melhorAluno.nota}) `
        + `é ${melhorAluno.numero} - ${melhorAluno.nome}`);
}

function piorNota(alunos){
    let piorAluno = alunos[0];

    for (let i = 1; i < alunos.length; i++) {
        if(alunos[i].nota < piorAluno.nota){
            piorAluno = alunos[i];
        }        
    }

    console.log(`O aluno com pior nota (${piorAluno.nota}) `
        + `é ${piorAluno.numero} - ${piorAluno.nome}`);
}

function mediaNota(alunos){
    media = 0;
    alunos.forEach(aluno => {
        media += aluno.nota;
    });

    media = media / alunos.length;

    alunoMedia = alunos[0];
    diferencaAluno = Math.abs(media - alunoMedia.nota);

    for (let i = 1; i < alunos.length; i++) {
        diferenca = Math.abs(media - alunos[i].nota);
        if(diferenca < diferencaAluno){
            alunoMedia = alunos[i];
            diferencaAluno = diferenca;
        }        
    }

    console.log(`O aluno mais próximo da média (${media}) é `
        + `é ${alunoMedia.numero} - ${alunoMedia.nome} com a`
        + `nota ${alunoMedia.nota}`);
}

function notasNegativas(alunos){
    contador = 0;
    alunos.forEach(aluno => {
        if(aluno.nota < 10)
            contador++
    });
    console.log(`número de negativas: ${contador}`);
}

function notasPositivas(alunos){
    contador = 0;
    alunos.forEach(aluno => {
        if(aluno.nota >= 10)
            contador++
    });
    console.log(`número de positivas: ${contador}`);
}

console.log(array_alunos);

// lista(array_alunos);
melhorNota(array_alunos);
piorNota(array_alunos);
mediaNota(array_alunos);
notasNegativas(array_alunos);
notasPositivas(array_alunos);
