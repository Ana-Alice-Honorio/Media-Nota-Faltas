let readline = require("readline-sync");
const prompt = require("prompt-sync")();

let nome = "";
let notas = [];
let materia = [];
let totalAula = 0;
let faltas = 0;
let percentualFaltas = 0;

console.log("Programa que calcula média de notas e faltas do aluno");

nome = readline.question("Qual o nome do aluno?: ");
materia = readline.question("Qual o nome da matéria?: ");
const numNotas = readline.question("Quantas notas deseja digitar? ");
// entrada de dados. Função como aula 19
function capturarNotas() {
  for (let i = 0; i < numNotas; i++) {
    notas.push(+prompt(`${i + 1} - Digite a nota: `));
  }

  let media = 0;
  notas.forEach((value) => {
    media += value;
  });

  media = media / notas.length;

  return media;
}

const media1 = capturarNotas();

totalAula = readline.question(
  `Informe a quantidade de aulas da primeira matéria ${materia}: `
);
faltas = readline.question(
  `Informe a quantidade de faltas do aluno ${nome} na ${materia}: `
);

percentualFaltas = (faltas * 100) / totalAula;

if (media1 >= 7 && percentualFaltas <= 25) {
  console.log(`${nome} Aprovado`);
} else {
  console.log(`${nome} em recuperação!`);
}

console.log(
  `A média de notas de ${nome} em ${materia} é: ${media1.toFixed(
    2
  )} com ${percentualFaltas.toFixed(2)}% de faltas.`
);

//  entrada de dados da segunda matéria
materia = readline.question("Qual o nome da segunda matéria?: ");

notas = [];
const media2 = capturarNotas();

totalAula = parseInt(
  readline.question(`Informe a quantidade de aulas da matéria ${materia}: `)
);
faltas = parseInt(
  readline.question(
    `Informe a quantidade de faltas do aluno ${nome} na ${materia}: `
  )
);

percentualFaltas = (faltas * 100) / totalAula;

console.log(
  `A média de notas de ${nome} em ${materia} é: ${media2.toFixed(
    2
  )} com ${percentualFaltas.toFixed(2)}% de faltas.`
);

if (media2 >= 7 && percentualFaltas <= 25) {
  console.log(`${nome} Aprovado`);
} else {
  console.log(`${nome} em recuperação!`);
}

const somaMedia = media1 + media2;

const notaGeral = `A média geral de notas do aluno ${nome} é ${(
  somaMedia / 2
).toFixed(2)}`;
console.log(notaGeral);
