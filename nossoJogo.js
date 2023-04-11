/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 

 */
// Imprime a mensagem de boas-vindas
console.log("Boas vindas ao jogo de BlackJack!");

// Pergunta se a pessoa deseja iniciar uma nova rodada
if (confirm("Quer iniciar uma nova rodada?")) {
  // Se a pessoa clicar "ok", inicia uma nova rodada
  console.log("Iniciando nova rodada...");
} else {
  // Se a pessoa clicar "cancelar", o jogo acaba
  console.log("O jogo acabou.");
}

// Imprime a mensagem de boas-vindas
console.log("Boas vindas ao jogo de BlackJack!");

// Pergunta se a pessoa deseja iniciar uma nova rodada
if (confirm("Quer iniciar uma nova rodada?")) {
  // Sorteia duas cartas para o usuário
  const cartaUsuario1 = comprarCarta();
  const cartaUsuario2 = comprarCarta();

  // Sorteia duas cartas para o computador
  const cartaComputador1 = comprarCarta();
  const cartaComputador2 = comprarCarta();

  // Calcula a pontuação do usuário e do computador
  const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
  const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor;

  // Imprime as cartas e a pontuação do usuário
  console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${pontuacaoUsuario}`);

  // Imprime as cartas e a pontuação do computador
  console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${pontuacaoComputador}`);

  // Verifica o vencedor ou se houve empate
  if (pontuacaoUsuario > pontuacaoComputador) {
    console.log("O usuário ganhou!");
  } else if (pontuacaoComputador > pontuacaoUsuario) {
    console.log("O computador ganhou!");
  } else {
    console.log("Empate!");
  }
} else {
  // Se a pessoa clicar em "cancelar", o jogo acaba
  console.log("O jogo acabou.");
}