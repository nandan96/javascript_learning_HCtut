//kings problem

let king = 'John'

console.log(king)

if(true){
   let king = 'Jim'   // changed here use Var or Let to make it local
    console.log(king)
}

if(true){
    let king = 'Bim' // change here again
    console.log(king)
}

console.log(king)