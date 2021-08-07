'''js script

function soma(x, y){
  return x + y;
}

x = 10
y = 20
x
y
z = soma(x, y)
z
//Exercícios de fixação em JS
const array01 = [0, 1, 2, 3, 4, 5, 6]

/*exercise 01
* criar uma função reduce que soma os elementos de um array
*/
console.log(array01)
const reducer = (acc, currentValue) => acc + currentValue

console.log(array01.reduce(reducer)) 

/*exercise 02
* criar uma função que soma os elementos pares de um array usando reduce e filter
*/
const pares = array01.filter(function(item){
  return item % 2 === 0
})
pares.reduce(reducer)

/*exercise 03
* criar uma função que soma os elementos ímpares de um array usando reduce e filter
*/
const impares = array01.filter(function(item){
  return item % 2 === 1  
})
impares.reduce(reducer)

/*exercise 04
* retornar um objeto com quantas vezes cada valor está presente no vetor
(usar a função reduce)
*/


'''
