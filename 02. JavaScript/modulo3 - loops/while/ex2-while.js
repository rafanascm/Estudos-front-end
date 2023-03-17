//Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 

let nota = prompt("Digite uma nota de 0 á 10")

while( nota < 0 || nota > 10){
nota = prompt("digite uma nota valida")
}
  if (nota >= 0 || nota <= 10 ) {
    alert("Nota valida")
  }
