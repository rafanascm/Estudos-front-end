// 1 pedir o nome da nave
// 2 Perguntar se deseja entrar na dobra com a seguinte mensagem
//Deseja entrar em dobra espacial?  1- sim 2- não
//3 Se a resposta for sim, contabilizamos uma dobra
//4 O usuário deve ser perguntado se deseja realizar a proxima dobra
//Deseja realizar a próxima dobra espacial?  1- sim 2- não
// Para cada "sim" vamos contabilizar mais uma dobra realizada
//5 pergunta deve ser feita novamente até que a escolha seja "Não"
//6 Ao escolher "Não" em qualquer pergunta a contagem deve ser encerrada
//7 O programa deve informar o nome da nave e o número de vezes seguidos que a dobra espacial foi realizada

let contador = 0 
let opcoes = ""

let nome = prompt("Qual o nome da nave?");
opcoes = prompt("Deseja entrar em dobra espacial?\n1-Sim\n2-Não");

while(opcoes == "1"){
  contador +=1
  // retorno do prompt pra poder sobreescrever o valor que tinha antes no opcoes
  opcoes = prompt("Deseja realizar a proxima dobra?\n1-Sim\n2-Não")
}
alert("Nome da Nave: " + nome + "\nQuantidade de dobras: " + contador)


