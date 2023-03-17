// OBJETIVO
// 1 criar uma funcao que exiba o menu e valide a opcao escolhida
// 2 Uma funcao para cada acao do menu de acelerar
// 3 encerrar o app somente quando digitar para sair

// ORIENTAÇÕES
// receber o nome da nave
// velocidade inicialmente em 0 e um menu deve ser exibido para que o usuario escolha entre as seguintes opçoes
// 1- Acelerar a nave em 5km/s
// 2 - Desacelerar em 5km/s (por mais que desacelere, a nave nao pode ter uma velocidade menor que 0/km)
// 3 - Imprmir dados de bordo
// 4 - sair do prgrama

let nomeNave = prompt("Qual o nome da nave?");

let velocidadeI = 0;

let opcoes;

function menu() {
  let opcao;
  while (opcao != "1" && opcao != "2" && opcao != "3" && opcao != "4") {
    opcao = prompt(
      "Escolha entre as seguintes opções:" +
        "\n1- Acelerar a nave em 5km/s" +
        "\n2- Desacelerar em 5km/s" +
        "\n3- Imprimir dados de bordo(KM)" +
        "\n4- Sair do programa"
    );
  }
  return opcao;
}

function acelerar(velocidade) {
  let novaVelocidade = velocidade + 5;
  return novaVelocidade;
}

function desacelar(velocidade) {
  let novaVelocidade = velocidade - 5;
  if (novaVelocidade < 0) {
    novaVelocidade = 0;
  }
  return novaVelocidade;
}

function printDados(nome, velocidade) {
  alert("Nome da nave: " + nome + "Velocidade: " + velocidade);
}

// laço que seja executado enquanto a opção seja diferente de 4 usado o DOWHILE porque quero que esse menu seja exibido pelo menos uma vez

do {
  opcoes = menu();
  switch (opcoes) {
    case "1":
      velocidadeI = acelerar(velocidadeI);
      break;
    case "2":
      velocidadeI = desacelar(velocidadeI);
      break;
    case "3":
      printDados(nomeNave, velocidadeI )
      break
    default: 
    alert("Encerrando programa de bordo")
  }
} while (opcoes != 4);
