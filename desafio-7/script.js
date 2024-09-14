function soma(num1, num2){
    const resultado = num1 + num2;
    alert(`A soma de ${num1} e ${num2} é ${resultado}`);
}

function subtracao(num1, num2){
    const resultado = num1 - num2;
    alert(`A subtração de ${num1} e ${num2} é ${resultado}`);
}

function multiplicacao(num1, num2){
    const resultado = num1 * num2;
    alert(`A multiplicação de ${num1} e ${num2} é ${resultado}`);
}

function divisao(num1, num2){
    if (num2 === 0) {
      alert("Erro! Não é possível dividir por zero.");
    } else {
      const resultado = num1 / num2;
      alert(`A divisão de ${num1} e ${num2} é ${resultado}`);
    }
}

let num1;
let num2;
let operacao = "";

do {
    const boasVindas = confirm("Bem-vindo! Deseja utilizar a calculadora?")

    if (!boasVindas) {
        alert("Ah! Que pena, quem sabe na próxima.")
        break;
    }
    
     operacao = prompt("Qual operação você deseja realizar? Responda 'soma', 'subtração', 'multiplicação , 'divisão' ou 'sair'.");

    while (operacao != "soma" && operacao != "subtração" && operacao != "multiplicação" && operacao != "divisão" && operacao != "sair" && operacao != ""){
        alert("Operação inválida. Por favor, tente novamente.");
        operacao = prompt("Qual operação você deseja realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.");
    }

    if (operacao === "sair") {
        break;
    }

    num1 = Number(prompt("Digite o primeiro número"))
    num2 = Number(prompt("Digite o segundo número"))

    switch (operacao) {
        case 'soma':
            soma(num1, num2)
            break;
        case 'subtração':
            subtracao(num1, num2)
            break;
        case 'multiplicação':
            multiplicacao(num1, num2);
            break;
        case 'divisão':
            divisao(num1, num2);
    }
    
} while (true)
    alert("Até mais!")