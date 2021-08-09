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

// Formas diferentes de solucionar os exercícios propostos
newArray = [0 , 1, 2, 3, 4, 5, 6, 6, 6]
/*
exercise 01
  somar todos os valores do array utilizando reduce
*/
const somar = (acumulado, atual) => acumulado + atual
const somatorio = newArray.reduce(somar, 0)
console.log(somatorio)
//usando o for
let sum = 0;
for (let i = 0; i < newArray.length; i++){
  sum = sum + newArray[i];
}

/*
exercise 02
  somar todos os valores pares do array utilizando reduce e filter
*/
const valoresPares = newArray.filter(item => item % 2 === 0);
console.log(valoresPares)
const somaPares = valoresPares.reduce(somar, 0)
console.log(somaPares)

//ou pode ser chamada dessa forma
const somaPares2 = newArray 
                      .filter(item => item % 2 === 0)
                      .reduce(somar, 0);
console.log(somaPares2);

/*
exercise 03
  somar todos os valores ímpares do array utilizando reduce e filter
*/
const valoresImpares = newArray.filter(item => item % 2 !== 0);
console.log(valoresImpares)
const somaImpares = valoresImpares.reduce(somar, 0);
console.log(somaImpares)

/*
exercise 04
  retorne um objeto com quantas vezes cada valor está presente no vetor (use reduce)
*/
//1 step : how to return an object

const dobrado = newArray.map(function(item){
  return {original: item, dobrado: item * 2};
});
console.log(newArray, '\n', dobrado);

const quantasVezes = newArray.reduce((obj, b) => {
  obj[b] = ++obj[b] || 1;
  return obj;
}, {});
console.log(quantasVezes)

/*
exercise 05
  dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) 
  * dica 1: utilize reduce, filter e keys
  * dica 2: escreva console.log (objeto.keys() e veja como ele poderá te ajudar neste exercício)
*/
const vetor = [1,2,2,4,3,5,5,5]

const howManyTimes = (agg, val) => {
  if(!agg[val]){
    agg[val] = 0
  }
  agg[val] = agg[val] + 1
  return agg
}
console.log(vetor.reduce(howManyTimes, {}))
'''
