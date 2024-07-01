import Header from "./Header/Header";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

function TodoWrapper() {
  return (
    <div className="container">
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoWrapper;
