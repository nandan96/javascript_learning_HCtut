let myGrade_system = function(myTotal , max_marks){  // passing 2 parameters here
    myPerc = (myTotal/max_marks) * 100   

    let myGrade = ''    

    if(myPerc > 90){
        myGrade = 'A'
    }else if(myPerc > 80){
        myGrade = 'B'
    }else if(myPerc > 60){
        myGrade = 'C'
    }else if(myPerc > 50){
        myGrade = 'D'
    }else{
        myGrade = 'F'
    }
    
    return ` Your percentage is ${myPerc} and your Grade is ${myGrade}`  //returning those var here
}

let myResult = myGrade_system(91,100)
console.log(myResult)