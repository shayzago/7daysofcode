let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];

const listas = [frutas, laticinios, doces, congelados];

let comida = "";
let categoria = "";

let adicionarComida = true;

while (adicionarComida != "nao") {
  if (listas.every(lista => lista.length === 0)) {
    adicionarComida = prompt(
      "Você deseja adicionar itens a sua lista de compras? Responda com 'sim' ou 'nao'").toLowerCase();
  } else {
    adicionarComida = prompt(
      "Você deseja adicionar itens a sua lista de compras? ou remover? Responda com 'sim', 'nao', ou 'remover'").toLowerCase();
  }

  if (adicionarComida === "nao") {
    break;
  }

  if (adicionarComida === "sim") {
    comida = prompt("Qual a comida que você deseja adicionar?").trim();
    if (!comida) {
      alert("Por favor, insira um nome válido.");
      continue;
    }

    categoria = prompt(
      "Em qual categoria você deseja adicionar esta comida? (frutas, laticinios, doces ou congelados)").trim().toLowerCase();

    if (categoria === "frutas") {
      frutas.push(comida);
    } else if (categoria === "laticinios") {
      laticinios.push(comida);
    } else if (categoria === "doces") {
      doces.push(comida);
    } else if (categoria === "congelados") {
      congelados.push(comida);
    } else {
      alert("Opção inválida! Por favor, escolha entre 'frutas', 'laticinios', 'doces' ou 'congelados'.");
    }
  }

  if (adicionarComida === "remover") {
    comida = prompt(
      `Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados ${congelados}\n Qual a comida que você deseja remover?`);

      if (frutas.indexOf(comida) != -1) {
        frutas.splice(frutas.indexOf(comida), 1);
        alert(`O item ${comida} foi removido com sucesso!`);
      } else if (laticinios.indexOf(comida) != -1) {
        laticinios.splice(laticinios.indexOf(comida), 1);
        alert(`O item ${comida} foi removido com sucesso!`);
      } else if (doces.indexOf(comida) != -1) {
        doces.splice(doces.indexOf(comida), 1);
        alert(`O item ${comida} foi removido com sucesso!`);
      } else if (congelados.indexOf(comida) != -1) {
        congelados.splice(congelados.indexOf(comida), 1);
        alert(`O item ${comida} foi removido com sucesso!`);
      } else {
        alert("Comida não encontrada na lista.");
      }
    }
  }

alert(
  `Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados ${congelados}`
);
