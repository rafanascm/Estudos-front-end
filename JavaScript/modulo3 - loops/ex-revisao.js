//Solicitar o nome da espaconave 
// Utilizar uma estrutura de repeticap ára inveter o nome da nave
// Durante a inversão procurar pelo caractere proibido
// Caso encontre a inversão deve ser parada onde estiver 

let nome = prompt("Qual é o nome da nave?")

let nomeInvertido = ""

for(let i = nome.length - 1; i >=0; i--){
  if(nome[i] == "e") {
    break
  }
  nomeInvertido += nome[i]
}

alert(nome + "\n" + nomeInvertido)

