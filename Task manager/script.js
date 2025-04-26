let task = document.getElementById('task')
let tasklist = JSON.parse(localStorage.getItem('tasklist')) || []

tasklist.forEach(task=>displayTask(task))

function addTask(){
    let newtask = {
        id:tasklist.length+1,
        task:task.value
    }
    tasklist.push(newtask)
    localStorage.setItem('tasklist',JSON.stringify(tasklist))
    displayTask(newtask)
    task.value = ''
}

function displayTask(task){
    let div = document.createElement('div')
    div.setAttribute('id',`task${task.id}`)
    div.innerHTML = `
     <b>${task.id}</b>
     <p>${task.task}</p>
     <button onclick="deleteTask(${task.id})">Delete</button>
    `
    document.getElementById('taskbox').appendChild(div)
}


function deleteTask(id){
    let task = document.getElementById(`task${id}`)
    tasklist = tasklist.filter(task=>task.id!=id)
    localStorage.setItem('tasklist',JSON.stringify(tasklist))
    task.remove()
}