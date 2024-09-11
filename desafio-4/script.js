let numeroEscolhido;
let tentativas;

iniciarJogo()

function iniciarJogo () {
    numeroEscolhido = Math.floor(Math.random() * 11);
    tentativas = 3;

    adivinhacao();
}

function adivinhacao () {
    while (tentativas > 0) {
      const palpite = parseInt(
        prompt(
          "Qual o valor que você deseja chutar? Escolha um número entre 0 a 10."
        )
      );

      if (palpite == numeroEscolhido) {
        alert(`Parabéns, Você acertou! O número era ${numeroEscolhido}.`);
        break;
      } else {
        tentativas--;
        if (tentativas > 0) {
          alert(`Você errou. Tentativas restantes: ${tentativas}`);
        } else {
          alert(`Você perdeu! O número correto era ${numeroEscolhido}.`);
        }
      }
    }
}

const tentarNovamente = confirm("Tentar novamente?")
if (tentarNovamente) {
    iniciarJogo()
} else {
    alert("Obrigado por jogar!")
}