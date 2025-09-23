import React, { useState } from "react";

function Functional() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  }

  function doneTask(index) {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updated = [...tasks];
      [updated[index], updated[index - 1]] = [
        updated[index - 1],
        updated[index],
      ];
      setTasks(updated);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updated = [...tasks];
      [updated[index], updated[index + 1]] = [
        updated[index + 1],
        updated[index],
      ];
      setTasks(updated);
    }
  }

  return (
    <div className="w-[500px] h-[400px] bg-gray-400 text-white flex flex-col items-center justify-center rounded-2xl">
      <h1 className="text-3xl mb-12">Welcome! This is To-Do-List APP</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleChange}
          className="border-2 border-black rounded p-0.5 m-2"
        />
        <button className="border-2 border-black rounded p-0.5 cursor-pointer hover:bg-gray-900 transition-all duration-400" onClick={addTask}>
          Add
        </button>
      </div>

      <ol className="flex flex-col justify-center items-center">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="mr-5 text-[22px]">{task}</span>
            <button className="bg-gray-500 text-white rounded p-1.5 cursor-pointer m-0.5 hover:bg-gray-900 transition-all duration-400" onClick={() => doneTask(index)}>
              done
            </button>
            <button className="bg-gray-500 text-white rounded p-1.5 cursor-pointer m-0.5 hover:bg-gray-900 transition-all duration-400" onClick={() => deleteTask(index)}>
              delete
            </button>
            <button className="bg-gray-500 text-white rounded p-1.5 cursor-pointer m-0.5 hover:bg-gray-900 transition-all duration-400" onClick={() => moveTaskUp(index)}>
              up
            </button>
            <button className="bg-gray-500 text-white rounded p-1.5 cursor-pointer m-0.5 hover:bg-gray-900 transition-all duration-400" onClick={() => moveTaskDown(index)}>
              down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Functional;
