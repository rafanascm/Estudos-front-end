//array bidimensional de mnaves que estão engatadas numa estação espacial
//1° nome da nave, quantidade de tripulantes, engate
// nesta lista a plataforma de engate que a nave está parada é o [indice da nave no array +1]

const nomes = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]

// Filtrar o nome das naves que tem mais de 9 tripulantes 
//Informar o número da plataforma em que está a primeira nave que ainda está com engate pendente 
//Destacar o nome de todas as naves colando-as em caixa alta e exibindo 
// Exibir um alerta com todos estas informações

let filtro = nomes.filter( posicao => {
  return posicao[1] > 9
}) .map(posicao => {
  return posicao[0]
})

let engate = nomes.findIndex( nave => {
  return nave[2] == false
} )


let caixaAlta = nomes.map( letra =>{
  return letra[0].toUpperCase()
})

console.log(filtro, engate,caixaAlta)