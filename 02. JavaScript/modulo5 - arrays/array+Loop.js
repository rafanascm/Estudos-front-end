var videoGames = ["xbox", "ps4", "nitendo","3DS"]

//-Ex de loop para acessar uma array-
for (item = 0; item < videoGames.length; item++ ) {
    //console.log(videoGames[item])
  }
  
  //-Ex de loop para acessar uma array e parar em um determinado item da lista-
  for (i = 0; i < videoGames.length; i ++){
  
    if(videoGames[i] === "nitendo"){
      break
    }
    //console.log(videoGames[i])
  }
  

//-Ex de loop ForEach

var frutas = ["banana", "maça", "melao","kiwi"]

frutas.forEach(function(qualquercoisa, index, frutas){
 console.log(qualquercoisa, index,frutas)

})