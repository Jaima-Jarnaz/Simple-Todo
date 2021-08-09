import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  newlyAddedTask: (todoText: string) => void; //function structure
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInput = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInput.current!.value;
    props.newlyAddedTask(enteredText);
    console.log(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInput} />
        <button type="submit"> Add Todo</button>
      </div>
    </form>
  );
};
export default NewTodo;
