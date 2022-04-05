import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const renderList = () => {
    return props.todoList.map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          index={index}
          deleteTask={props.deleteTask}
        />
      );
    });
  };

  return <div className="todoList">{renderList()}</div>;
}
