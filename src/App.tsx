import React, { useState } from "react";
import ToDOList from "./components/ToDoList";
import NewTodo from "./components/NewToDo";
import "./App.css";

export interface ToDo {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]); //array of objects

  const newTaskAdd = (text: string) => {
    const newData = { id: Math.random().toString(), text: text };
    setTodos((previousData) => [...previousData, newData]);
  };

  const deleteTodoTask = (deletedTextId: string) => {
    setTodos((todos) => {
      return todos.filter((data) => data.id !== deletedTextId);
    });
    console.log(todos);
  };
  return (
    <div className="App">
      <h1>Task Management</h1>
      <NewTodo newlyAddedTask={newTaskAdd} />
      <ToDOList items={todos} deleteTask={deleteTodoTask} />
    </div>
  );
};

export default App;
