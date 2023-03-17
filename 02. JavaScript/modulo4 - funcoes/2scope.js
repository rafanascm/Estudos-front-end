// SCOPE GLOBAL - podemos chamar o "let" em qualquer lugar do código 
let nomeNave = "Morty"

function novoNome(){
  nomeNave = "Rick"
}

console.log(nomeNave)
novoNome()
console.log(nomeNave)


// SCOPE LOCAL essa variavel só póde ser chamada dentro da função
// ERROR: "velocidadeNave is not defined"
function nave(){
  let velocidadeNave = 0
}

nave()
console.log(velocidadeNave)

// Mesmo dentro de uma função o let pode se tornar local apenas para a condição também não sendo possível chamaro o consolo.log fora da condição 
function velocidadeDetalhada(){
  let velocidade = 50
  if( velocidade == 50){
    velocidade = 60
    var nomeEspacial = "Elemental"
    let tipoNave = "Discovery"
  }
  console.log(velocidade)
  console.log(nomeEspacial)
  console.log(tipoNave)
  
}
velocidadeDetalhada()