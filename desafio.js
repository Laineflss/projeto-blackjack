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

    let cartasUsuario = []
    let cartasDoComputador = []
    
    console.log("Bem-vindo ao jogo de BlackJack!")
    
    // Função para sortear uma carta
    function desenhoCarta() {
      const valorDasCartas = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
      const cartaSuits = ["♠️","♣️","♥️","♦️"]
      const valor = valorDasCartas[Math.floor(Math.random() * 13)]
      const suit = cartaSuits[Math.floor(Math.random() * 4)]
      const carta = valor + suit
      return carta
    }
    
    // Função para calcular a pontuação das cartas
    function calculaPontos(cartas) {
      let pontuacao = 0
      let contaAs = 0
      for (let carta of cartas) {
        const valorDaCarta = carta[0]
        if (valorDaCarta === "A") {
          contaAs += 1
          pontuacao += 11
        } else if (valorDaCarta === "K" || valorDaCarta === "Q" || valorDaCarta === "J") {
          pontuacao += 10
        } else {
          pontuacao += parseInt(valorDaCarta)
        }
      }
      while (pontuacao > 21 && contaAs > 0) {
        pontuacao -= 10
        contaAs -= 1
      }
      return pontuacao
    }
    
    // Função para verificar se as duas primeiras cartas são dois Ases
    function checkDoisAses(cartas) {
      if (cartas.length === 2 && cartas[0][0] === "A" && cartas[1][0] === "A") {
        return true
      }
      return false
    }
    
    // Sorteio das cartas iniciais dos jogadores
    do {
      cartasUsuario = [desenhoCarta(), desenhoCarta()]
      cartasDoComputador = [desenhoCarta(), desenhoCarta()]
    } while (checkDoisAses(cartasUsuario) || checkDoisAses(cartasDoComputador))
    
    // Mostra as cartas iniciais dos jogadores
    console.log("Suas cartas são:", cartasUsuario.join(" "))
    console.log("As cartas do computador são:", cartasDoComputador[0], "X")
    
    // Pergunta se o usuário deseja comprar mais uma carta
    let comprarCarta = confirm(
      "Deseja comprar mais uma carta?\n" +
      "Suas cartas são: " + cartasUsuario.join(" ") + "\n" +
      "A carta revelada do computador é: " + cartasDoComputador[0]
    )
    
    // Loop para compra de cartas pelo usuário
    while (comprarCarta) {
      cartasUsuario.push(desenhoCarta())
      const pontuacaoUsuario = calculaPontos(cartasUsuario)
      console.log("Suas cartas são:", cartasUsuario.join(" "))
      if (pontuacaoUsuario > 21) {
        alert("Sua pontuação é " + pontuacaoUsuario + ". Você estourou!")
        break
      } else if (pontuacaoUsuario === 21) {
        alert("Parabéns! Sua pontuação é 21!")
        break
      } else {
        comprarCarta = confirm(
          "Deseja comprar mais uma carta?\n" +
          "Suas cartas são: " + cartasUsuario.join(" ") + "\n" +
          "A carta revelada do computador é: " + cartasDoComputador[0]
        )
      }
    }
    
    // Compra de cartas pelo computador
    if (calculaPontos(cartasUsuario) <= 21) {
      console
    }