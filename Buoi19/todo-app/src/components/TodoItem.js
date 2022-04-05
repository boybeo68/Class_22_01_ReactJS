import React from "react";

export default function TodoItem(props) {
  return (
    <li>
      {props.item}
      <span onClick={() => props.deleteTask(props.index)} className="icon">
        <i className="fa-solid fa-trash"></i>
      </span>{" "}
    </li>
  );
}
