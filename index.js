// TODO: ЗАДАЧА 1 на LocalStorage =========================================

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.
const taskFormRef = document.querySelector("#task-form");
const taskListRef = document.querySelector("#task-list");
const taskNameRef = document.querySelector('input[name="taskName"]');

taskFormRef.addEventListener("submit", addtask);

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
  taskListRef.innerHTML = "";
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.innerText = task;
    const button = document.createElement("button");
    button.innerText = "delete";
    button.dataset.index = i;
    button.addEventListener("click", deleteTask);
    li.appendChild(button);
    taskListRef.appendChild(li);
  });
}
function deleteTask(e) {
  const taskIndex = e.target.dataset.index;
  tasks.splice(taskIndex, 1);
  render();
  saveTasks();
}
function addtask(e) {
  e.preventDefault();

  const task = taskNameRef.value.trim();
  if (task !== "") {
    tasks.push(task);
    taskNameRef.value = "";
    render();
    saveTasks();
  }
}
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
render();
