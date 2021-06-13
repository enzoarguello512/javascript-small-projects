
//#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+

//Array destructuring

//---------------------------------------------------
const array = ['A', 'B', 'C', 'D', 'E']
const first = array[0]
const second = array[1]

console.log(first)
// A
console.log(second)
// B

//---------------------------------------------------
const array = ['A', 'B', 'C', 'D', 'E']
const [first, second, third] = array

console.log(first)
// A
console.log(second)
// B
console.log(third)
// C

//---------------------------------------------------
const array = ['A', 'B', 'C', 'D', 'E']
const [first, , third] = array

console.log(first)
// A
console.log(third)
// C

//---------------------------------------------------
const array = ['A', 'B', 'C', 'D', 'E']
const [first, second, ...rest] = array

console.log(first)
// A
console.log(second)
// B
console.log(rest)
// ['C', 'D', 'E']

//---------------------------------------------------
//Default Values
var [a = 1, b = 2, c = 3, d] = [4, 5];

console.log(a, b, c, d);
//4 5 3 undefined

//#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+

//Function destructuring

//---------------------------------------------------
function sumAndMultiply(a, b) {
  return [a + b, a * b]
}

const [sum, product] = sumAndMultiply(2, 3)

console.log(sum)
// 5
console.log(product)
// 6

//#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+

//Object destructuring

//---------------------------------------------------
const person = {name: 'Kyle', age: 25}
const {name, age} = person

console.log(name)
// Kyle
console.log(age)
// 25

//---------------------------------------------------
//Rename variables
const person = {name: 'Kyle', age: 25}
const {name: firstName, age} = person

console.log(firstName)
// Kyle
console.log(age)
// 25

//---------------------------------------------------
//Nested object destructuring
const person = {
  name: 'Kyle',
  age: 25,
  address: {
    city: 'Somewhere',
    state: 'One Of Them'
  }
}
const {name, address: {city}} = person

console.log(name)
// Kyle
console.log(city)
// Somewhere

//---------------------------------------------------
//Default Values
const person = {name: 'Kyle', age: 25}
const {name = 'Sally', favoriteFood = 'Banana'} = person

console.log(name)
// Kyle
console.log(favoriteFood)
// Banana

//#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+
