
import { addTask } from "./components/addTask.js"
import { displayTasks } from "./components/readTasks.js"

/*
(() =>{ //start
*/


const btn= document.querySelector("[data-form-btn]")



btn.addEventListener('click', addTask)
displayTasks()


/*
})()//end
*/