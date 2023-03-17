// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 

let usuario = prompt("Informe o seu usuario")
let senha = prompt("Agora digite a sua senha")

while( usuario == senha){
 senha = prompt("A senha não pode ser igual ao nome")
}

if ( usuario =! senha) {
  alert("Cadastrado com sucesso")
  }
