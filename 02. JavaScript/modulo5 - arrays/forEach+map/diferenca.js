const nome = ["Woody", "Buzz", "Rex", "Sr.Batata"]

const retornoForEach = nomes.forEach((nomeAtual) => {
  console.log(nomeAtual);

  return nomeAtual.toUpperCase()
})

console.log(retornoForEach)

console.log("AQUI ACABA O FOREACH")

const retornoMap = nomes.map((nomeAtualtwo) => {
  console.log(nomeAtualtwo)
  return nomeAtualtwo.toUpperCase()
})

console.log(retornoMap)

//Enquanto o forEach foi feito para ser uma alternativa ao loop for, o map foi feito para fazemos operação de transformação/alteração nos itens de um array e ao final dessas operações ter uma lista nova com a mesma quantidade de itens da lista base.


//EXEMPLO DE FOR EACH AO INVÉS DO LOPP

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

for ( i = 0; i < nomes.length; i++) {
  console.log('[for]', nomes[i])
}

nomes.forEach(function (qualquercoisa, qualquercoisatwo){
  console.log('[forEach]' + qualquercoisa + qualquercoisatwo)
})

//forEach percorre todos os itens de um array, tal como o loop for normal, isso é porque internamente ele possui um lop for