//diff b/w map and object is that you can find how many objects and entity is available 
var john = {
    Name: "john",               //creating 3 objects, john,junny, samena
    Registry: 1211,
    Cell: "Leftwing",
}

var junny = {
    Name: "junny",
    Registry: 1415,
    Cell: "Northwing",
}

var samena = {
    Name: "samena",
    Registry: 1541,
    Cell: "Fielddivision",
}

let users = new Map()               //creating a user object from map function

//console.log(typeof users)

users.set('User1', john)            //linking the objects 'user1' is our defined and
users.set('User2', junny)           //john is from the above users object
users.set('User3', samena)

console.log(users)                  
console.log(users.keys());

/* iterating in Maps */

for (const ud_value of users.values()){    //creating for look to use value variable to loop into users.values function
    console.log(ud_value.Name);
}

// for (const [keys, value] of users.values()){
//     return key + `=` + value
// }