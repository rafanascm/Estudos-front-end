//1-Considerar que a nave está em 150km 
//2- Crie uma função para desacelarar a cada segundo 
//obs: cada iteração de um laço de repetição é 1 segundo
// Essa função será uma HOF e também deve imprimir cada atualização que houver na velocidade da nave 
//obs: Esta impressao deve ser feita por meio de callback que essa função receberá 
//4- Ao final, exiba uma mensagem informando que a nave está parada e as comportas podem ser abertas

 const desacelarar = (velocidade, imprimir) => {
  let reduzir = 20

  while(velocidade > 0){
    imprimir(velocidade)
    velocidade -= reduzir 
  }

  alert("Nave parada. As comportas podem ser abertas")
 }

 let velocidadeNave = 150

 desacelarar(velocidadeNave, function(velocidade){
  console.log("Velocidade atual:" + velocidade)
 })