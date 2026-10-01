const taskregister = document.querySelector("#submit")
const taskInput = document.querySelector("#task")
const date = document.querySelector("#deadline")
const time = document.querySelector("#deadline-time");
const list = document.querySelector("ul");
type Task = {
    id: number;
    title: string;
    done: boolean;
    deadline: Date;
}
if (taskregister !== null) {
    taskregister.addEventListener("click", (e) => {
        const task = document.createElement("li");
        const deadline = document.createElement("span");
        const button = document.createElement("button");
        if(taskInput instanceof HTMLInputElement && date instanceof HTMLInputElement &&
            time instanceof HTMLInputElement
        ){
        const newTask: Task = {
            id : 1,
            title: taskInput instanceof HTMLInputElement ? taskInput.value : "",
            done : false,
            deadline : new Date(date.value + "T" + time.value)
        };
        deadline.textContent = newTask.deadline.toLocaleString("ja-JP");
        button.textContent = "完了";
        button.addEventListener("click", (e) => {
            task.remove();
        });
        task.textContent = newTask.title;
        task.appendChild(deadline);
        task.appendChild(button);
        if (list !== null) list.appendChild(task);
        }
        
    })
}
