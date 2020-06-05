const my_todo_list = []

my_todo_list.push('buy batteries')
my_todo_list.push('access oil change')

console.log(my_todo_list)

my_todo_list.forEach(function(todo, index){
    console.log(`your task ${index + 1} is ${todo} `)
    
})

