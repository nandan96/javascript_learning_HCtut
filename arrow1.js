//objective: use arrow function, create a small todo list and extract the one that has true in it.

const my_todo_list = [
    {
        Title: "Check the NAS",
        isDone: false
    },
    {
        Title: "Uninstall GTA Online as it was more addictive",
        isDone: true,
    },
    {
        Title: "Help in installing UBUNTU",
        isDone: false,
    }
]

const things_notdone = my_todo_list.filter((Title)=> Title.isDone ===false) //using arrow function    

//alternative for 
//const things_notdone =  my_todo_list.filter((todo)=> {
//return todo.isDone === false })

console.log(things_notdone)

