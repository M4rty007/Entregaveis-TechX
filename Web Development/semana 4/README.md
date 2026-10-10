# Arrays, DOM e Eventos

Projeto de prática dos fundamentos de arrays, manipulação do DOM e eventos
em JavaScript. Abra o arquivo `index.html` no navegador e use o Console
(F12) para acompanhar as mensagens.

## Métodos de array

- `forEach`: percorre os elementos para executar uma ação, como imprimir
  mensagens ou criar elementos no DOM.
- `map`: transforma os elementos e retorna um novo array, como no exemplo
  que converte nomes para maiúsculas.
- `filter`: retorna um novo array apenas com os elementos que atendem a uma
  condição, como produtos abaixo de determinado preço.
- `reduce`: percorre os elementos e acumula um resultado único, como a soma
  dos preços.

## DOM

O projeto usa `querySelector` e `querySelectorAll` para localizar elementos.
`textContent` altera ou lê texto, `createElement` cria itens e `append`
adiciona esses itens à lista. `classList.add`, `classList.toggle` e
`classList.contains` permitem adicionar, alternar e verificar classes CSS.
O exemplo de `innerHTML` acrescenta dois itens à lista.

## Eventos e Event Delegation

Os listeners do botão respondem a `click` e `mouseover`; o campo de nome
usa `keyup` para exibir o valor digitado. O formulário usa `submit` e
`preventDefault()` para evitar o recarregamento da página, ignora entradas
vazias e adiciona novas tarefas à lista.

A delegação de eventos usa um único listener no elemento `#lista`. Ele
verifica se `e.target` é um `<li>` e alterna a classe `feito`. Assim, os
itens adicionados dinamicamente também respondem a cliques sem precisar
de um listener individual para cada item.
