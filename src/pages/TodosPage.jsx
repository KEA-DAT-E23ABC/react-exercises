import { useEffect, useState } from "react";
import { TodoForm, TodosList } from "../components/Todos";
import {
  addTodo,
  deleteTodoById,
  getTodos,
  updateTodoById,
} from "../services/apiFacade";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(data => setTodos(data));
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = new FormData(e.target);

    const newTodo = {
      title: form.get("todo"),
      completed: false,
    };

    await addTodo(newTodo);
    getTodos().then(data => setTodos(data));

    e.target.reset();
  };

  const handleToggleComplete = async todoToToggle => {
    const updatedTodo = { ...todoToToggle, completed: !todoToToggle.completed };
    await updateTodoById(todoToToggle.id, updatedTodo);
    await getTodos().then(data => setTodos(data));
  };

  const handleDelete = async todoToDelete => {
    await deleteTodoById(todoToDelete.id);
    await getTodos().then(data => setTodos(data));
  };

  return (
    <div style={{ maxWidth: "100%", padding: "1em" }}>
      <h1>Todos Exercise</h1>
      <TodoForm handleSubmit={handleSubmit} />
      {todos.length === 0 && <p>No todos</p>}
      <TodosList
        todos={todos}
        handleToggleComplete={handleToggleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
}
