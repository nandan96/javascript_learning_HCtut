uname = "Michle"
pword = "tats_wat_she_said"

if(uname != ""){
console.log(`Hello ${uname}`)
}
else{
    console.log("Intruder!")
}

console.log(pword.length)

if(pword.length >= 105){
    var valid=1
}
else{
    valid = 2
}
console.log(valid)

console.log(uname.toLowerCase())
console.log(uname.toUpperCase())

Username_checker = function(mystring){
    if((mystring.includes(".com")) && mystring.length>5){
    return true
    }
    return false                //reason why else is not used here bcoz the function stops
                                //at first return statement if its true, if condition did not match it will be exc further
}

Password_checker = function(pass){
    if(pass.includes(123) && pass.length>5){
    return true
    }
    return false
}


console.log(Username_checker(uname))
console.log(Password_checker(pword))