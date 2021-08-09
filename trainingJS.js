var nome = "josé"
var idade = 30
var resultado = idade - nome

if (resultado){
  console.log(resultado)
}else{
  console.log("NaN")
}

var f_name = 'jose'
var l_name = ''
var age = 30
if (!f_name){
  console.log("favor informar um nome")
}
if (!l_name){
  console.log("favor informar sobrenome")
}
if (!age){
  console.log('favor informar idade')
}

var n1 = 3
var n2 = 15
var result = n2 / n1
result--
console.log(result)

function teste(age){
  age = idade + 1
  return age
}

idade = 33
idade

teste(idade)
idade

//training functions in JS
const sum = function(a, b){
  return a + b;
}

const calculator = function(op, a, b){
  return op(a, b);
} 
console.log(calculator(sum, 33, 10));

//working with arrays
const newArray = [1, 2, 3, 4, 5]

const double = newArray.map(function(item){
  return item * 2
})
console.log(newArray, double)

const paresDobrado = newArray.filter(function(item){
  return item % 2 === 0;
}).map(function(item){
  return item * 2;
});
console.log(paresDobrado)

//arrow function
const double2 = item => {
  return item * 2;
}

const doublePairs2 = newArray.filter(function(item){
  return item % 2 === 0;
}).map(double2);

console.log(doublePairs2);


//a simple form to create the function above
const double3 = item => item * 2;
const onlyPairs = item => item % 2 === 0;

const doublePairs3 = newArray.filter(onlyPairs).map(double3)
console.log(doublePairs3)

//usando o .map com objetos
const vetor = [1, 2, 3, 4, 5]
const dobrado = vetor.map(function(item){
  return {original: item, dobrado: item * 2}
})
console.log(vetor, '\n', dobrado)