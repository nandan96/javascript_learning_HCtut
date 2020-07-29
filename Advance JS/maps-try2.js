const myArray = [1,2,3,4,5,2,1,4,2,5,1,3,3];
const mySet = new Set(myArray) //using Set() function

// console.log(myArray) //--- this is a normal array
// console.log(mySet)  //--- Set doesnt O/P duplicate values

// const uniqueArray = [... mySet] //using spread syntax to trun the set into array that has unique value (no duplicate value)

// console.log(uniqueArray)

//methonds of Set
// mySet.add([1,2,3])
// mySet.add('4')
// mySet.add({Time: 'valuable'}) //this is used to add number/string/object into  mySet, cannot add all together

// console.log(mySet)

// //delete
// mySet.delete(3)
// console.log(mySet)

// //clear, acceps no parameter

// mySet.clear()
// console.log(mySet)

/* has, prints boolien */
console.log(mySet.has(5))

/* size, prints size */
console.log(mySet.size)