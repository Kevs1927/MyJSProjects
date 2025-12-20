
let userInput = prompt('Enter what you wanna do: ').toLowerCase();
const toDos = [];
    console.log(toDos.indexOf('kkhjkhj'));

while(userInput !== 'quit') {
    if(userInput === 'new') {
        userInput = prompt("Enter to-do list: ").toLowerCase();

        if(toDos.includes(userInput)) {
            console.log("Task is already listed!");
        } else {
            toDos.push(userInput);
            console.log("Task added!");
        }
    } else if(userInput === 'list') {
        console.log("***************");

        if(toDos.length === 0) {console.log('Task list is empty!')};

        for(let i = 0; i < toDos.length; i++) {
            console.log(`${i+1}: ${toDos[i]}`);
        }

        console.log("***************");
    } else if(userInput === 'delete') {
        userInput = prompt("Enter task to delete").toLowerCase();
        let taskToDelete = toDos.indexOf(userInput);
        if(taskToDelete !== -1) {
            toDos.splice(taskToDelete, 1);
            console.log("Task deleted!");
        } else {
            console.log("Task not found! or List is empty!");
        }
    }
    userInput = prompt("Enter what you wanna do: ");
}
console.log("Quiting the app....");