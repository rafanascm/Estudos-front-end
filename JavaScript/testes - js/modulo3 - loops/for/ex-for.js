// Solicitar o nome da espaçonave 
// Perguntar o caractere que ele deseja substituir
// Perguntar por qual caractere deseja substituir 
// Utilizar o FOR para resolver o problema
// Para cada caractere igual o informado, substituir pelo novo
//Exibir um alerta com o novo nome da nave


let nomeEspacoNave = prompt("Qual o nome da nave?")
let caractereOne = prompt("Qual caractere deseja substituir?")
let caractereTwo = prompt("Por qual caractere deseja substituir?")

let nomeNovoEspacoNave = ""

for ( let pos = 0; pos < nomeEspacoNave.length; pos++) {
  if (nomeEspacoNave[pos] == caractereOne) {
     nomeNovoEspacoNave += caractereTwo 
    
  } else {
    nomeNovoEspacoNave += nomeEspacoNave[pos]
  }
}

alert("Esse é o antigo nome da espaçonave: " + nomeEspacoNave +"\nEsse é o novo nome da espaçonave: " + nomeNovoEspacoNave)