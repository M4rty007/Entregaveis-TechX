// PARTE 1 — Manipulação e validação de pedidos

const pedidos = [
  { cliente: "Bia", valor: 120, status: "pago" },
  { cliente: "Ravi", valor: 75.5, status: "pendente" },
  { cliente: "Lia", valor: 45, status: "pago" },
  { cliente: "   ", valor: 30, status: "pago" },
  { cliente: "Caio", valor: -10, status: "pago" },
  { cliente: "Eva", valor: "50", status: "pago" },
];

const pedidosValidos = pedidos.filter((pedido) => {
  return (
    typeof pedido.cliente === "string" &&
    pedido.cliente.trim() !== "" &&
    typeof pedido.valor === "number" &&
    Number.isFinite(pedido.valor) &&
    pedido.valor > 0
  );
});

const pedidosPagos = pedidosValidos.filter((pedido) => {
  return pedido.status === "pago";
});

const totalFaturado = pedidosPagos.reduce((total, pedido) => {
  return total + pedido.valor;
}, 0);

const textosPedidos = pedidosPagos.map((pedido) => {
  return `${pedido.cliente.trim()} — R$ ${pedido.valor.toFixed(2)}`;
});

console.log("Pedidos válidos:", pedidosValidos);
console.log("Pedidos pagos:", pedidosPagos);
console.log("Total faturado: R$", totalFaturado.toFixed(2));
console.log("Resumo dos pedidos pagos:", textosPedidos);


// PARTE 2 — Buscador de CEP

const formularioCep = document.querySelector("#formulario-cep");
const campoCep = document.querySelector("#campo-cep");
const botaoCep = document.querySelector("#botao-cep");
const statusCep = document.querySelector("#status-cep");
const resultadoCep = document.querySelector("#resultado-cep");
const historicoLista = document.querySelector("#historico-ceps");

// O histórico fica em memória enquanto a página estiver aberta.
const historicoCeps = [];

function definirStatus(elemento, mensagem, estado = "") {
  elemento.textContent = mensagem;
  elemento.dataset.estado = estado;
}

function adicionarAoHistorico(cep, descricao) {
  const registro = { cep, descricao };
  historicoCeps.push(registro);

  const itemHistorico = document.createElement("li");
  itemHistorico.textContent = `${registro.cep} — ${registro.descricao}`;
  historicoLista.append(itemHistorico);

  return { registro, itemHistorico };
}

function atualizarHistorico(item, descricao) {
  item.registro.descricao = descricao;
  item.itemHistorico.textContent =
    `${item.registro.cep} — ${item.registro.descricao}`;
}

function adicionarCampoEndereco(rotulo, valor) {
  const dt = document.createElement("dt");
  dt.textContent = rotulo;

  const dd = document.createElement("dd");
  dd.textContent = valor || "Não informado";

  resultadoCep.append(dt, dd);
}

formularioCep.addEventListener("submit", async (e) => {
  e.preventDefault();

  resultadoCep.replaceChildren();

  const cep = campoCep.value.trim();

  // Exatamente oito dígitos, sem letras, espaços internos ou pontuação.
  if (!/^\d{8}$/.test(cep)) {
    definirStatus(statusCep, "Digite um CEP válido com exatamente 8 dígitos.", "erro");
    return;
  }

  const itemHistorico = adicionarAoHistorico(cep, "Buscando...");
  botaoCep.disabled = true;
  definirStatus(statusCep, "Buscando...", "carregando");

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    const endereco = await resposta.json();

    if (endereco.erro) {
      definirStatus(statusCep, "CEP não encontrado.", "vazio");
      atualizarHistorico(itemHistorico, "CEP não encontrado");
      return;
    }

    adicionarCampoEndereco("Rua", endereco.logradouro);
    adicionarCampoEndereco("Bairro", endereco.bairro);
    adicionarCampoEndereco("Cidade", endereco.localidade);
    adicionarCampoEndereco("UF", endereco.uf);

    definirStatus(statusCep, "", "sucesso");

    const localidade = [endereco.localidade, endereco.uf]
      .filter(Boolean)
      .join("/");

    atualizarHistorico(
      itemHistorico,
      localidade || "Endereço encontrado"
    );
  } catch (erro) {
    console.error("Falha na consulta do CEP:", erro);
    definirStatus(
      statusCep,
      "Falha na conexão. Verifique sua internet e tente novamente.",
      "erro"
    );
    atualizarHistorico(itemHistorico, "Falha na conexão");
  } finally {
    botaoCep.disabled = false;
  }
});


// PARTE 3 — Mini Pokédex

const formularioPokemon = document.querySelector("#formulario-pokemon");
const campoPokemon = document.querySelector("#campo-pokemon");
const botaoPokemon = document.querySelector("#botao-pokemon");
const statusPokemon = document.querySelector("#status-pokemon");
const resultadoPokemon = document.querySelector("#resultado-pokemon");

formularioPokemon.addEventListener("submit", async (e) => {
  e.preventDefault();

  resultadoPokemon.replaceChildren();

  const nomePokemon = campoPokemon.value.trim().toLowerCase();

  if (nomePokemon === "") {
    definirStatus(statusPokemon, "Digite o nome de um Pokémon.", "erro");
    return;
  }

  botaoPokemon.disabled = true;
  definirStatus(statusPokemon, "Buscando...", "carregando");

  try {
    const resposta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nomePokemon)}`
    );

    if (resposta.status === 404) {
      definirStatus(statusPokemon, "Pokémon não encontrado.", "vazio");
      return;
    }

    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    const pokemon = await resposta.json();

    const titulo = document.createElement("h3");
    titulo.textContent = pokemon.name;

    const tipos = document.createElement("p");
    tipos.textContent = `Tipos: ${
      pokemon.types.map((item) => item.type.name).join(", ")
    }`;

    resultadoPokemon.append(titulo);

    if (pokemon.sprites.front_default) {
      const imagem = document.createElement("img");
      imagem.src = pokemon.sprites.front_default;
      imagem.alt = `Imagem de ${pokemon.name}`;
      resultadoPokemon.append(imagem);
    } else {
      const avisoImagem = document.createElement("p");
      avisoImagem.textContent = "Imagem não disponível.";
      resultadoPokemon.append(avisoImagem);
    }

    resultadoPokemon.append(tipos);
    definirStatus(statusPokemon, "", "sucesso");
  } catch (erro) {
    console.error("Falha na consulta do Pokémon:", erro);
    definirStatus(
      statusPokemon,
      "Falha na conexão. Verifique sua internet e tente novamente.",
      "erro"
    );
  } finally {
    botaoPokemon.disabled = false;
  }
});
