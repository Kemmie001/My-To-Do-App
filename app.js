const form = document.querySelector("#task-form");
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('button');
const taskInput = document.querySelector('#task');
const button = document.querySelector('.enter');

function inputLength(){
    return taskInput.value.length;
}
function inputItem(){
    return taskInput.value;
}

// eventlisteners
loadEvent();
function loadEvent(){
    // DOM load eventlister
    document.addEventListener('DOMContentLoaded', getTasks);
    // add task event
    form.addEventListener('submit', addTask)
    // add list on click check button
    button.addEventListener('click', addList)
    // remove task event
    clearBtn.addEventListener('click', clearTask)
    
    
}
// get task from local storage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        //  create li element
const li = document.createElement('li')
// add class
li.className = 'collection-item';

// create textnode and append child
li.appendChild(document.createTextNode(task));

// create a new link element
const link = document.createElement('a');

// add class
link.className ='delete-item';

// add icon html
link.innerHTML = '<i class="fas fa-trash-alt"></i>';

// append the link to li
li.appendChild(link);

// append li to ul
taskList.appendChild(li);

function toggle(){
    li.classList.toggle('done');
}

function removeTask(){
    taskList.removeChild(li);
    removeTaskFromLocalStorage(taskList);
}



link.addEventListener('click', removeTask);
li.addEventListener('click', toggle);
    });
}

// Add Task
function addTask(k){
    if(taskInput.value === ""){
        alert('Please add a task');
    }
//  create li element
const li = document.createElement('li')
// add class
li.className = 'collection-item';

// create textnode and append child
li.appendChild(document.createTextNode(taskInput.value));

// create a new link element
const link = document.createElement('a');

// add class
link.className ='delete-item';

// add icon html
link.innerHTML = '<i class="fas fa-trash-alt"></i>';

// append the link to li
li.appendChild(link);

// append li to ul
taskList.appendChild(li);

// store in Local storage
storeTask(taskInput.value);

// clear input
taskInput.value = "";
 
// k.preventDefault;

function toggle(){
    li.classList.toggle('done');
}

function removeTask(){
    taskList.removeChild(li);
    removeTaskFromLocalStorage(taskList);
}



link.addEventListener('click', removeTask)
li.addEventListener('click', toggle)
}

function storeTask(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTask(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
    clearTasksFromLocalStorage();
}
function addList(){
    if(inputLength() > 0 && inputItem() != 8 ){
        addTask();
    }
}
 //Remove from local storage
 function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1)
        }
    });
      localStorage.setItem('tasks', JSON.stringify(tasks)); 
} 
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

