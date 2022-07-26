/* Exemplo de criação de botão para ser 'apertado' (clickado) */

<button>Aperte-me</button>
Copy to Clipboard
var button = document.querySelector('button');

button.onclick = function() {
  var nome = prompt('Qual é o seu nome?');
  alert('Olá ' + nome + ', é um prazer te ver!');

/* Fonte do código:
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables */
