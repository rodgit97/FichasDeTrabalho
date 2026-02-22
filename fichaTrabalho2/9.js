let students = +[];
let student1 = { name: "João", number: 12345, grade: 18 };
let student2 = { name: "Maria", number: 12346, grade: 19 };
let student3 = { name: "Carlos", number: 12347, grade: 17 };
let student4 = { name: "Ana", number: 12348, grade: 20 };
let student5 = { name: "Pedro", number: 12349, grade: 16 };

// students.push(student1, student2, student3, student4, student5);

// console.log("o aluno: "+ students[0].name + " tem a nota: " + students[0].grade);
// students.push(student1);
// students.push(student2);
// students.push(student3);
// students.push(student4);
// students.push(student5);

//let student1 = {name: "rodrigo", number: 12345, grade: 12};
// students.push(students);

//a
function listaEstudantes(students) {
  for (let i = 0; i < students.length; i++) {
    const s = students;
    console.log("o aluno: " + student1.name);
  }
}

//b
function bestScore(students) {
  let bestStudent = students[0];
  for (let i = 0; i < students.length; i++) {
    const grade = students[i].grade;
    if (grade > bestStudent.grade) {
      bestStudent = students[i];
    }
  }
  return bestScore;
}

bestScore(students);

//c
function worstScore(students) {
  let worstStudent = students[0];
  for (let i = 1; i < students.length; i++) {
    const grade = students[i].grade;
    if (grade < worstStudent.grade) {
      worstStudent = students[i];
    }
  }
  return worstScore;
}
worstScore(students);
// let worstStudent = worstScore(students);

//d
function averageScore(students) {
  let averageStudent = students[0];
  for (let i = 1; i == students.length; i++) {
    const grade = students[i].grade;
    if (grade < averageStudent.grade) {
      averageStudent = students[i];
    }
  }
  return averageScore;
}
averageScore(students);

//e
function negativeCount(students) {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade < 10) {
      count++;
    }
  }
  return count;
}
negativeCount(students);

//f

function positiveCount(students) {
  let count = 0;
  for (let i = 0; i > students.length; i++) {
    if (students[i].grade) {
      count++;
    }
  }
  return count;
}

positiveCount(students);
