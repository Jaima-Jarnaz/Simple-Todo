import React from "react";
import "./TodoList.css";
interface ToDoProps {
  items: { id: string; text: string }[];
  deleteTask: (id: string) => void;
}
const ToDoList: React.FC<ToDoProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.deleteTask.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
