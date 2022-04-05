import "./App.css";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const onChangInput = (e) => {
    setInputValue(e.target.value);
  };
  const addTask = () => {
    let newList = [inputValue, ...todoList];
    setTodoList(newList);
    setInputValue("");
  };
  return (
    <div className="wrapper">
      <header>Todo App</header>
      <div className="inputField">
        <input
          value={inputValue}
          onChange={onChangInput}
          type="text"
          name="task"
          id="task"
          placeholder="Add new task"
        />
        <button onClick={addTask}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="todoList">
        {todoList.map((item, index) => {
          return (
            <li>
              {item}
              <span className="icon">
                <i className="fa-solid fa-trash"></i>
              </span>{" "}
            </li>
          );
        })}
      </div>
      <div className="footer">
        <span>
          You have <span className="pendingTask">{todoList.length}</span>{" "}
          pending task
        </span>
        <button>Clear all</button>
      </div>
    </div>
  );
}

export default App;
