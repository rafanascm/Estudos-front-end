//ex de objeto com propriedades
var dadosPessoais = {
  nome: 'Rafaela',
  idade: 22,
  mulher: true
}

// para acessar a propriedade do objeto basta inserir "."
// console.log(dadosPessoais.nome)


// Ex de objeto e metodos 
let pessoa = {
  nome: "Rafaela",
  idade: 22,
  falar: function(){
    // console.log("Olá, eu me chamo rafa")
  }
}

// This como referencia ao proprio objeto 
var height = 120

var menu = {
  width: 800,
  height: 50,
  metadeHeight(){
    return this.height / 2
  }
}

