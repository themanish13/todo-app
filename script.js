let input = document.getElementById("inputtask");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => addTaskToList(task));

button.onclick = () => {
    let task = input.value.trim();
    if(!task) 
        return alert("Please write a task!");

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    addTaskToList(task);
    input.value = "";
};

function addTaskToList(task) {
    let li = document.createElement("li");
    li.textContent = task + " ";
    
    
let del = document.createElement("button");
del.textContent = "Delete";
del.classList.add("delete-btn");


    del.onclick = () => {
        li.remove();
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    li.appendChild(del);
    list.appendChild(li);
} 