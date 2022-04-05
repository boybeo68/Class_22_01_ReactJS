import "./App.css";
import { useState } from "react";
import InputTask from "./components/InputTask";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
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
  const deleteTask = (index) => {
    // trước khi thay đổi state -> clone state ra. Miễn sao không thay đổi mảng ban đầu
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };
  return (
    <div className="wrapper">
      <header>Todo App</header>
      <InputTask
        inputValue={inputValue}
        onChangInput={onChangInput}
        addTask={addTask}
      />
      <TodoList todoList={todoList} deleteTask={deleteTask} />
      <Footer todoList={todoList} />
    </div>
  );
}

export default App;
