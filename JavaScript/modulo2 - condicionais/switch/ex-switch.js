var distanciaAnosLuz = prompt("Qual a distância em anos Luz?");

var opcoes = prompt(
  "Qual operação deseja realizar?\n1-Parsec\n2- Unidade astronomima(AU)\n3- Quilometros(KM)"
);

var valorUnico;
var valorConvertido;

switch (opcoes) {
  case "1":
    valorUnico = "Parsec";
    valorConvertido = distanciaAnosLuz * 0.306601;
    break;
  case "2":
    valorUnico = "Unidade astronomima(AU)";
    valorConvertido = distanciaAnosLuz * 63241.1;
    break;
  case "3":
    valorUnico = "Quilometros(KM)";
    valorConvertido = distanciaAnosLuz * 9.5 * Math.pow(10, 12);
    break;

  default:
    valorUnico = "Unidade não identificada";
    valorConvertido = "Conversão fora do escopo";
}

alert("Valor da distância anos luz: " + distanciaAnosLuz + "\n" + valorUnico + "; " + valorConvertido)