let area;
let linguagem;

// Loop para garantir que o usuário escolha uma área válida
do {
    area = prompt("Você gostaria de escolher a área de Front-end ou Back-end? Escolha uma dessas opções.").toLowerCase();

    // Verificação de resposta inválida
    if (area !== "front-end" && area !== "back-end") {
        alert("Opção inválida! Por favor, escolha entre 'Front-end' ou 'Back-end'.");
    }
} while (area !== "front-end" && area !== "back-end"); // Repete até uma área válida ser escolhida

// Condicional para a escolha da área (Front-end ou Back-end)
if (area == "front-end") {
  alert("Você escolheu a área de Front-end!");

  // Loop para garantir que o usuário escolha um framework válido
  do {
    linguagem = prompt(
      "Qual framework você prefere para o Front-end? React ou Vue? Escolha uma dessas opções."
    ).toLowerCase();

    // Verificação de resposta inválida
    if (linguagem !== "react" && linguagem !== "vue") {
      alert("Opção inválida! Por favor, escolha entre 'React' ou 'Vue'.");
    }
  } while (linguagem !== "react" && linguagem !== "vue"); // Repete até um framework válido ser escolhido

} else if (area == "back-end") {
  alert("Você escolheu a área de Back-end!");

  // Loop para garantir que o usuário escolha uma linguagem válida
  do {
    linguagem = prompt(
      "Qual linguagem você prefere para o Back-end? Java ou C#? Escolha uma dessas opções."
    ).toLowerCase();

    // Verificação de resposta inválida
    if (linguagem !== "java" && linguagem !== "c#") {
      alert("Opção inválida! Por favor, escolha entre 'Java' ou 'C#'.");
    }
  } while (linguagem !== "java" && linguagem !== "c#"); // Repete até uma linguagem válida ser escolhida
}

let proximoPasso;

// Loop para garantir que o usuário escolha um próximo passo válido
do {
  proximoPasso = prompt(
    `Você gostaria de seguir se especializando em ${area} ou 
    seguir se desenvolvendo para se tornar Fullstack? Responda 1 para a primeira opção 
    e 2 para a segunda opção.`
  );

  // Verificação de resposta inválida
  if (proximoPasso !== "1" && proximoPasso !== "2") {
    alert("Opção inválida! Por favor, informe se é 1 ou 2.");
  }
} while (proximoPasso !== "1" && proximoPasso !== "2"); // Repete até que o usuário escolha 1 ou 2

// Condicional para a escolha do próximo passo
if (proximoPasso == "1") {
    alert(`Você escolheu seguir se especializando em ${linguagem} na área de ${area}!`)
} else if (proximoPasso == "2") {
    alert("Você escolheu seguir se desenvolvendo para se tornar Fullstack!")
}

// Loop para perguntar se o usuário quer aprender mais tecnologias
let msgTecnologias = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");

while (msgTecnologias) {
  let novaTecnologia = prompt("Qual?");
  alert(`Nossa, que legal! ${novaTecnologia} realmente é sensacional!`)
  msgTecnologias = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");
}

alert("Obrigado pelo seu tempo e bons estudos!")