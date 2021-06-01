import { React, useState } from "react";
import "./input.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

const Input = () => {
  const [inputValue, setInputvalue] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      saveTodo({
        item: inputValue,
        done: false,
        id: Date.now(),
      })
    );
    setInputvalue("");
  };

  return (
    <div className='input'>
      <input
        id='input'
        placeholder='Enter Todo'
        type='text'
        value={inputValue}
        onChange={(e) => setInputvalue(e.target.value)}
      />
      <button disabled={inputValue.length === 0} onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default Input;
