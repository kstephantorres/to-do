const checkComplete =(id)=>{
    const i = document.createElement('i')
    i.classList.add('far', 'fa-check-square','icon')
    i.addEventListener('click', (event) => competeTask(event, id))
    return i
}

const competeTask =(event, id)=>{
    const element = event.target
    element.classList.toggle('fas')
    element.classList.toggle('completeIcon')
    element.classList.toggle('far')
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    
    const index = tasks.findIndex( item => item.id === id )
    
    tasks[index]['complete']= !tasks[index]['complete']
    
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log("🚀 ~ file: checkComplete.js:18 ~ competeTask ~ tasks[index]", tasks[index])
    
}

export default checkComplete