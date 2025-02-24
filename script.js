// initialize an array to store tasks
let tasks=[ ];
 
// add event listener to add tasks to addTasks btn
document.getElementById("addTaskBtn").addEventListener("click", function(){

    //whatever user puts in is saved as a variable
    let taskInput=document.getElementById("taskInput").value;

// if user puts in something in the input box, whatever they put in goes in the tasks array
    if (taskInput) {
        tasks.push(taskInput);
        document.getElementById("taskInput").value= ' ';
       
//display whatever user put in below with a checkbox
    displayTasks() 
    }
})