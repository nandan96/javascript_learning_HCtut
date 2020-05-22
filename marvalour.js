const numbers = ['one','two','three','four','five']

//replacing a value
numbers[0] = 'replaced one'
console.log(numbers)

//del or shifting
console.log(numbers.shift()) //deleting first value
console.log(numbers) //new array

//unshifiting or adding
numbers.unshift('adding one')
console.log(numbers)

//pop
numbers.pop()   //pops last number
console.log(numbers)

//push
numbers.push('five')
console.log(numbers)

//splice
numbers.splice(2,2,'replaced')
console.log(numbers)