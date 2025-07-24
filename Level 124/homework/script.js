
const getDataFromBackend = () => {
  const http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);

      console.log(response)

      const firstTen = response.slice(0, 10);
      const completedTasks = firstTen.filter((task) => task.completed);

      const task3 = response.find((task) => task.id === 3);

      const ul = document.getElementById("todo-list");

      completedTasks.forEach((task) => {

        const li = document.createElement("li");
        li.innerHTML = `${task.id}: ${task.title} <button id="delBtn">Delete</button>`;
        ul.appendChild(li);

      });

      const task3Div = document.getElementById("task-id-3");
      if (task3) {
        task3Div.innerHTML = `<strong>Task ID 3:</strong> ${task3.title}`;
      } else {
        task3Div.innerHTML = `<strong>Task ID 3:</strong> არ მოიძებნა`;
      }

    }
  };

  http.open("GET", "https://jsonplaceholder.typicode.com/todos");
  http.send();

};

getDataFromBackend();


