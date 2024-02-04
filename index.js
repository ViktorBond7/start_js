// TODO: ЗАДАЧА 1 на LocalStorage =========================================

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.
// const taskFormRef = document.querySelector("#task-form");
// const taskListRef = document.querySelector("#task-list");
// const taskNameRef = document.querySelector('input[name="taskName"]');

// taskFormRef.addEventListener("submit", addtask);

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// function render() {
//   taskListRef.innerHTML = "";
//   tasks.forEach((task, i) => {
//     const li = document.createElement("li");
//     li.innerText = task;
//     const button = document.createElement("button");
//     button.innerText = "delete";
//     button.dataset.index = i;
//     button.addEventListener("click", deleteTask);
//     li.appendChild(button);
//     taskListRef.appendChild(li);
//   });
// }
// function deleteTask(e) {
//   const taskIndex = e.target.dataset.index;
//   tasks.splice(taskIndex, 1);
//   render();
//   saveTasks();
// }
// function addtask(e) {
//   e.preventDefault();

//   const task = taskNameRef.value.trim();
//   if (task !== "") {
//     tasks.push(task);
//     taskNameRef.value = "";
//     render();
//     saveTasks();
//   }
// }
// function saveTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }
// render();

// TODO: ЗАДАЧА 2  на LocalStorage =========================================

// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

const checkBox = document.querySelector("#checkbox");
const body = document.querySelector("body");

const themeKey = "theme";
const lightTheme = "light-theme";
const darkTheme = "dark-theme";
const getTheme = localStorage.getItem(themeKey);

switch (getTheme) {
  case darkTheme:
    body.classList.add("dark");
    checkBox.checked = true;
    break;

  case lightTheme:
    body.classList.add("light");
    checkBox.checked = false;
    break;

  default:
    body.classList.add("light");
    checkBox.checked = false;
    break;
}

checkBox.addEventListener("click", () => {
  if (checkBox.checked === false) {
    localStorage.setItem(themeKey, lightTheme);
    body.classList.add("light");
    body.classList.remove("dark");
  }
  if (checkBox.checked === true) {
    localStorage.setItem(themeKey, darkTheme);
    body.classList.add("dark");
    body.classList.remove("light");
  }
});
