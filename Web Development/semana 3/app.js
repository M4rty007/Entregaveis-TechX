// BLOCO 1 — Fundamentos e variáveis

let pontos = 20;
pontos += 10;
console.log("Pontos:", pontos);

const MAX_PONTOS = 100;
try {
  MAX_PONTOS = 120;
} catch (erro) {
  console.log(`${erro.name}: ${erro.message}`);
  console.log("Uma constante não pode receber um novo valor após ser declarada.");
}

const texto = "JavaScript";
const numero = 42;
const booleano = true;
let valorUndefined;
const valorNull = null;

console.log("typeof texto:", typeof texto);               // string
console.log("typeof numero:", typeof numero);             // number
console.log("typeof booleano:", typeof booleano);         // boolean
console.log("typeof valorUndefined:", typeof valorUndefined); // undefined
console.log("typeof valorNull:", typeof valorNull);       // object — comportamento histórico da linguagem

const nome = "Ana";
const linguagem = "JavaScript";

const fraseTemplate = `Olá, ${nome}! Você está aprendendo ${linguagem}.`;
const fraseConcatenada = "Olá, " + nome + "! Você está aprendendo " + linguagem + ".";

console.log(fraseTemplate);
console.log(fraseConcatenada);


// BLOCO 2 — Funções

// Funções declaradas podem ser chamadas antes da declaração (hoisting).
console.log("Maior de idade, função declarada:", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

// Funções de expressão não podem ser chamadas antes da inicialização da const.
try {
  ehMaiorDeIdadeExpressao(20);
} catch (erro) {
  console.log(`${erro.name}: a função de expressão ainda não foi inicializada.`);
}

const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};

console.log("Maior de idade, função de expressão:", ehMaiorDeIdadeExpressao(20));

// Função dobro nas três formas.

function dobroDeclarada(n) {
  return n * 2;
}

const dobroExpressao = function (n) {
  return n * 2;
};

const dobroArrow = (n) => n * 2;

console.log("Dobro — declarada:", dobroDeclarada(5));
console.log("Dobro — expressão:", dobroExpressao(5));
console.log("Dobro — arrow:", dobroArrow(5));

// Parâmetro com valor padrão.
const dobroComPadrao = (n = 1) => n * 2;
console.log("Dobro sem argumento:", dobroComPadrao());


// BLOCO 3 — Controle de fluxo

function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log("Nota 7:", classificarNota(7));
console.log("Nota 4:", classificarNota(4));

const corSemaforo = "amarelo";

switch (corSemaforo) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida");
}

// Tabuada do 5 — for clássico.
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// Contagem regressiva — while.
let contagem = 5;

while (contagem >= 1) {
  console.log(contagem);
  contagem--;
}

// Números de 1 a 20 — for.
for (let i = 1; i <= 20; i++) {
  const parOuImpar = i % 2 === 0 ? "par" : "ímpar";
  console.log(`${i}: ${parOuImpar}`);
}

// Números de 1 a 20 — while.
let numeroAtual = 1;

while (numeroAtual <= 20) {
  const parOuImpar = numeroAtual % 2 === 0 ? "par" : "ímpar";
  console.log(`${numeroAtual}: ${parOuImpar}`);
  numeroAtual++;
}

// Dia da semana: 1 = segunda-feira, 7 = domingo.
function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "segunda-feira";
    case 2:
      return "terça-feira";
    case 3:
      return "quarta-feira";
    case 4:
      return "quinta-feira";
    case 5:
      return "sexta-feira";
    case 6:
      return "sábado";
    case 7:
      return "domingo";
    default:
      return "Número inválido";
  }
}

console.log("Dia 3:", diaDaSemana(3));
console.log("Dia 8:", diaDaSemana(8));
