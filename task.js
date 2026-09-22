const taskregister = document.querySelector("#submit")
const taskInput = document.querySelector("#task")
const date = document.querySelector("#deadline")
const time = document.querySelector("#deadline-time");
const list = document.querySelector("ul");
taskregister.addEventListener("click", (e) => {
    e.preventDefault;

    const task = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.textContent = taskInput.Value;
    button.textContent = "削除";
    task.appendChild(span);
    task.appendChild(button);
    list.appendChild(task);
})