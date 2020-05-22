let sayHello = function(name)
{
    console.log(`Hello ${name}`)
    console.log('welcome to our online portal')
}

sayHello('John')

let fullname = function(firstname, lastname)
{
    console.log(`Hello Mr.${firstname} ${lastname}` )
}

fullname('John','Doe')

let add = function(num1, num2)
{
    add = num1+num2
    return add   // it is just returning the value but not showing in O/P
}
result = add(2,3)
console.log(result) // so you need to use this fucntion to o/p it 
