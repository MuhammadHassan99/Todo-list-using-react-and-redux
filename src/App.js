import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

const App = () => {
  const todoList = useSelector(selectTodoList);
  console.log(todoList);
  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__todoContainer'></div>
        {todoList?.map((item) => (
          <TodoItem name={item.item} done={item.done} id={item.id} />
        ))}
        <Input />
      </div>
    </div>
  );
};

export default App;
