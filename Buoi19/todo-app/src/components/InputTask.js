import React from "react";

export default function InputTask(props) {
  return (
    <div className="inputField">
      <input
        value={props.inputValue}
        onChange={props.onChangInput}
        type="text"
        name="task"
        id="task"
        placeholder="Add new task"
      />
      <button onClick={props.addTask}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
