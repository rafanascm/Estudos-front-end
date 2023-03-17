// função normal sem o Higher Order
// function double(number) {
//   return number * 2
// }
// //console.log(double(4))

// function triple(number) {
//   return number * 3
// }
// //console.log(triple(4))

// function quadruple(number) {
//   return number * 4
// }
//console.log(quadruple(4))

// função com o Higher Order

function getMultiplier(multipler){
  return function (number){
    return number * multipler
  }
}
const double = getMultiplier(2)
const triple = getMultiplier(3)
const quadruple = getMultiplier(4)

console.log(double(4))
console.log(triple(4))
console.log(quadruple(10))