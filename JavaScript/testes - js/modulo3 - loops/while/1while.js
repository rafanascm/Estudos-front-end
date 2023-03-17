let velocidadeInicial = 50 
let velocidadeAumentada = 5

while (velocidadeInicial <= 100){
  //console.log("Acelerando: Estamos a " + velocidadeInicial + "km/s")
  velocidadeInicial += velocidadeAumentada
}

let nome = "Rafaela"
let pos = 0
let nomelength = nome.length 

while(pos < nomelength) {
  if(nome[pos] == "a") {
    console.log(pos)
  }
  pos +=1 
}