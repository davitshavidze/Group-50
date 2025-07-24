let allTasks = [];

function getDataFromBackend() {
  const http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      const firstTen = response.slice(0, 10);
      allTasks = firstTen.map((task) => ({...task}));
      renderTasks();

      console.log(allTasks)
    }
  };

  http.open("GET", "https://jsonplaceholder.typicode.com/todos");
  http.send();
}

function renderTasks() {
  const completedDiv = document.getElementById("completedTasks");
  const activeDiv = document.getElementById("activeTasks");

  completedDiv.innerHTML = "";
  activeDiv.innerHTML = "";

  allTasks.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task" + (task.completed ? " completed" : "");
    div.innerHTML = `
        <span>${task.title}</span>
          <div>
            <button onclick="toggleComplete(${task.id})">
              ${task.completed ? "Undo" : "Complete"}
            </button>
            <button class="delete-btn" onclick="deleteTask(${
              task.id
            })">Delete</button>
          </div>
        `;
    (task.completed ? completedDiv : activeDiv).appendChild(div);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const title = input.value.trim();
  if (!title) return;

  const newTask = {
    userId: 1,
    title,
    completed: false,
  };

  allTasks.push(newTask);
  input.value = "";
  renderTasks();
}

function deleteTask(id) {
  allTasks = allTasks.filter((task) => task.id !== id);
  renderTasks();
}

function toggleComplete(id) {
  const task = allTasks.find((task) => task.id === id);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

getDataFromBackend();
