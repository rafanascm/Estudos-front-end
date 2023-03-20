//forEach 
// map 
// filter
let personagens = ["woody", "buzz", "rex", "sr.batata"]

// pode ser utilizado o ForEach tb 
// personagens.map(function (qualquercoisa,qualquercoisatwo){
//   console.log("personagens: " + qualquercoisa + "\nindice: " + qualquercoisatwo)
// })

let validacao = personagens.filter(elemento => elemento.length >= 4)
console.log(validacao)


