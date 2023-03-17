//declarando uma funcao
function boasVindas() {
  //bloco de codigo
  alert("Seja bem vindo piloto(a)");
}

// retorno da funcao
//boasVindas()

// PARAMETROS

function corrida(velocidade, aceleracao) {
  let novaVelocidade = velocidade + aceleracao;
  console.log("Nova velocidade: " + novaVelocidade);
}

// corrida(60,10)
// corrida(10,15)

// PARAMETRO PADRAO

function apresentacao(nome, mensagem = "Olá") {
  alert(nome + " , " + mensagem);
}

//apresentacao("Robert");

// RETURN

function corrida(velocidade, aceleracao) {
  let novaCorrida = (velocidade += aceleracao);
  console.log("Nova velocidade " + novaCorrida);
  //return novaCorrida
}

//corrida(20,10)

let cor = prompt("Qual sua cor favorita?");
"Eu gosto da natureza"

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do ceu";
  } else if (cor === "verde") {
    return `${cor}`;
  } else if (cor === "")
  return "Você não especificou nenhuma cor"
  else {
    return "Não conheco essa cor";
  }
}

alert(corFavorita(cor))