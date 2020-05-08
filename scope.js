let isGlobal = "I am a Global String"

console.log(isGlobal)

if (true){
    let isLocal = "I am Local string"
     isGlobal = "I am Superman"
    console.log(isGlobal)
    console.log(isLocal)

}

console.log(isGlobal)