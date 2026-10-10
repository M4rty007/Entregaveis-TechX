// BLOCO 1 — Arrays e métodos

const nomes = ["Ana", "Bruno", "Carla"];

nomes.forEach((nome) => {
  console.log(`Olá, ${nome}!`);
});

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

const precos = [10, 25, 40, 5, 60];

const precosAcimaDe20 = precos.filter((preco) => preco > 20);
const somaPrecos = precos.reduce((total, preco) => total + preco, 0);

console.log("Preços acima de 20:", precosAcimaDe20);
console.log("Soma dos preços:", somaPrecos);

const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 80 },
  { nome: "Caneta", preco: 5 },
];

const nomesProdutos = produtos.map((produto) => produto.nome);
const produtosAbaixoDe50 = produtos.filter((produto) => produto.preco < 50);
const somaPrecosProdutos = produtos.reduce(
  (total, produto) => total + produto.preco,
  0
);

console.log("Nomes dos produtos:", nomesProdutos);
console.log("Produtos abaixo de R$ 50:", produtosAbaixoDe50);
console.log("Soma dos preços dos produtos:", somaPrecosProdutos);

produtos.forEach((produto) => {
  console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2).replace(".", ",")}`);
});


// BLOCO 2 — Manipulação do DOM

const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Estudante";

const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach((paragrafo) => {
  console.log(paragrafo.textContent);
});

const lista = document.querySelector("#lista");

// Acrescenta dois itens aos três que já estão no HTML.
lista.innerHTML += "<li>Item inserido com innerHTML 1</li>";
lista.innerHTML += "<li>Item inserido com innerHTML 2</li>";

const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
terceiroItem.classList.add("destaque");
lista.append(terceiroItem);

console.log(
  'O terceiro item tem a classe "destaque"?',
  terceiroItem.classList.contains("destaque")
);

const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach((tarefa) => {
  const item = document.createElement("li");
  item.textContent = tarefa;
  lista.append(item);
});

lista.querySelector("li").classList.add("feito");

console.log("Quantidade de itens na lista:", lista.querySelectorAll("li").length);

// Item criado pelo JavaScript para testar a delegação de eventos.
const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item dinâmico — clique para testar";
lista.append(itemDinamico);


// BLOCO 3 — Eventos e Event Delegation

const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
  console.log("Clicou!");
});

botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => {
  console.log("Nome digitado:", campoNome.value);
});

// Um único listener na lista atende os itens existentes e os criados depois.
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log("Item clicado:", e.target.textContent);
  }
});

const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const textoTarefa = campoTarefa.value.trim();

  if (textoTarefa === "") {
    return;
  }

  const novoItem = document.createElement("li");
  novoItem.textContent = textoTarefa;
  lista.append(novoItem);

  campoTarefa.value = "";
});
