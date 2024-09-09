const nome = prompt('Qual o seu nome?')
const idade = prompt('Quantos anos você tem?')
const linguagemDeProgramacao = prompt('Qual linguagem de programação você está estudando?')

alert(`Olá, ${nome}! Voce tem ${idade} anos e está estudando ${linguagemDeProgramacao}.`)

const perguntaLinguagem = prompt(`Você gosta de estudar ${linguagemDeProgramacao}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (perguntaLinguagem == '1') {
    alert(`Muito bom, ${nome}! Continue estudando e você terá muito sucesso.`);
} else if (perguntaLinguagem == '2') {
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
} else {
    alert('Opção inválida! Tente novamente.');
}