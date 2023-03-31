// Objeto com array

let loja = {
  nome: "GamesExpress",
  tipo: "Jogos",
  produtos: ["Xbox", "PS4", "Nitendo"]
}

loja.produtos.push("Xbox One X")

console.log(loja.produtos)

// ---------------------------------------------

// objeto dentro de arrays
let jogos = [
  { nome: "Assasins Creed", quantidade: 10},
  { nome: "The last of us", quantidade: 20},
  { nome: "Life Strange", quantidade: 8}
]

jogos.forEach(jogos => {
  console.log(jogos.nome + " quantidade no estoque: " + jogos.quantidade)
})

// Objeto dentro de objeto 
let jogosEstoque = {
  nome: "The last of us",
  quantidadeTotal: 200,
  versao: {
    nome: "The last of us PART I",
    quantidade: 100
  }
}

console.log(jogosEstoque.versao)