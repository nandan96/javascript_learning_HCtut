let Course_count = function(user_name = 'unknown', courses = 'undefined') //assigning default parameters
{
    return 'hello ' + user_name + ',your course lists is:' + courses
}

results = Course_count()    //as no parameters are mentioned the function will pass the default parameters, you can override this by assigning a value here, like mentioned below

// results = Course_count('jhon','C')

console.log(results)