// // variavel - expressao - incremento
// for ( var i=0; i<10; i++ ) {
//   console.log(i)
// }

let nome = "Rafaela"
let novoNome = ""

for(let i = 0; i < nome.length; i++) {
  if (nome[i] == "a") {
    novoNome += "i"
  } else {
    novoNome += nome[i]
  }
}

console.log(novoNome)