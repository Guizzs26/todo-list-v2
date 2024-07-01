import { useState } from "react";
import Header from "./Header/Header";
import TodoAddForm from "./TodoAddForm/TodoAddForm";
import TodoList from "./TodoList/TodoList";

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => setTasks((tasks) => [...tasks, newTask]);

  return (
    <>
      <Header />
      <TodoAddForm onAddTask={handleAddTask} />
      <TodoList />
    </>
  );
}

export default TodoApp;
