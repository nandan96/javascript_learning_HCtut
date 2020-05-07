// && is AND operator
// || is OR operator

isLogin = false
isVerified = false
isPaid = true
isGuest = false
isBlocked = false

if (isLogin && isVerified && isPaid){
    console.log("Welcome User")
    console.log("task:give access to paid course")
}
else if(isVerified || isGuest){
    console.log("give access to free course")
}
else if(isLogin){
    console.log("Message: Please login")
}
else if(isBlocked){
    console.log("your account has been blocked, please contact XYZ@123.com")
}
else{
    console.log("An error occured")
}