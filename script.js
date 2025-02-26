// initialize an array to store tasks
let tasks=[ ];
 
// add event listener to add tasks to addTasks btn
document.getElementById("addTaskBtn").addEventListener("click", function(){

    //whatever user puts in is saved as a variable
    let taskInput=document.getElementById("taskInput").value;

// if user puts in something in the input box, whatever they put in goes in the tasks array
    if (taskInput) {
        tasks.push(taskInput);
        document.getElementById("taskInput").value= '';
       
        displayTasks();
    }
})

//display whatever user put in below with a checkbox
function displayTasks() {
    //this grabs unordered list from html
    let taskList=document.getElementById("taskList");

    //clear whatever's inside of it
    taskList.innerHTML='';

    //loop thru each task in array
    tasks.forEach((task, index) => {
        //save list element as variable
        let li=document.createElement("li");

        //adds bootstrap classes to try and style it
        li.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        )


        //set innerHTML of li element w/ task list n remove button
        li.innerHTML=`${task} <button class="btn btn-dark btn-sm" onclick="removeTask(${index})"> √ </button`;       

        //append new task to tasklist
        taskList.appendChild(li);
    })
}



//time to remove the tasks
function removeTask(index) {
    //remove task at given index from array
    tasks.splice(index,1);

    //call function to update task list display
    displayTasks();
}