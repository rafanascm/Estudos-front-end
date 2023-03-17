// 1 perguntar o nome do piloto 
// 2 Colocar velocidade inicial da nave como 0 
// 3 Perguntar a que velocidade ele gostaria de acelerar a nave 
// 4 Pedir uma confirmação informando que está indo para velocidade X km/s

//Se for menor que 0km/s: "Nave está parada, considere partir e aumentar a velocidade"
//Se for menor que 40km/s: "Você está devagar, podemos aumentar mais"
//Se for maior ou igual a 40km/s e menor que 80km/s : "parece uma boa velocidade para manter"
//Se for maior ou igual a 80km/s e menor que 100km/s : "Velocidade alta. Considere diminuir"
//Se for maior ou igual a 100km/s: "Velocidade perigosa. Controle automático forçado"

alert("Bem vindo(a) a seguir vamos pedir alguns dados!")

let nomePiloto = prompt("Qual o seu nome?")

let velocidadeInicial = 0

let velocidade = prompt("A que velocidade você gostaria de acelerar a nave?")

let confirmacao = confirm("Você confirma a velocidade: " + velocidade + "km/s?")



if ( velocidade <= 0) {
  alert("Nave está parada, considere partir e aumentar a velocidade")
}
  else if ( velocidade < 40){
    alert("Você está devagar, podemos aumentar mais")
  }

  else if ( velocidade >= 40 && velocidade < 80) {
    alert("parece uma boa velocidade para manter")
  }

  else if ( velocidade >= 80 && velocidade < 100 ) {
    alert("Velocidade alta. Considere diminuir")
  }
    else {
      alert("Velocidade perigosa. Controle automático forçado")
    }

    alert("nome do piloto: " + nomePiloto + "\nVelocidade atual: " + velocidade)



