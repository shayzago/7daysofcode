let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];

let comida = "";
let categoria = "";

let adicionarComida = true;

while(adicionarComida) {
    adicionarComida = confirm("Você deseja adicionar itens a sua lista de compras?")

    if(!adicionarComida){
    break;
    }

    comida = prompt("Qual a comida que você deseja adicionar?").trim();
    if (!comida) {
        alert("Por favor, insira um nome válido.")
        continue;
    }

    categoria = prompt("Em qual categoria você deseja adicionar esta comida? (frutas, laticinios, doces ou congelados)").trim().toLowerCase();

    if (categoria === "frutas") {
      frutas.push(comida);
    } else if (categoria === "laticinios") {
      laticinios.push(comida);
    } else if (categoria === "doces") {
      doces.push(comida);
    } else if (categoria === "congelados") {
      congelados.push(comida);
    } else {
      alert(
        "Opção inválida! Por favor, escolha entre 'frutas', 'laticinios', 'doces' ou 'congelados'."
      );
    }
}

alert(
  `Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados ${congelados}`
);
