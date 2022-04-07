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
// delete task : gọi todoItem -> todolist -> App.js
// redux: xử lý data.

// hướng 1: cùng nhau làm 1 project.
// anh sẽ hướng dẫn mn làm 1, 2 module đầu tiên sau đó mọi người tự hoàn thiện module còn lại

// hướng 2: tự nghĩ project, mỗi người tự có ý tưởng làm project của riêng mình
// 4 buổi cuối đều sẽ join học, trao đổi, anh sẽ hỗ trợ mọi người giải đáp thắc mắc, solution, bug

// Cách thức triển khai ý tưởng

// chỉ có 1 ý tưởng lớn -> 3 chức năng chính mình thích nhất. 


// BE -> chọc vào DB lấy dữ liệu 
// BE -> tạo ra 1 đường link chưa dữ liệu (gọi là api API)
// thêm, sửa, xoá được dũ liệu. 
// API -> cung cấp các phương thức để thêm sửa xoá đc dữ liệu

// GET -> lấy dữ liệu về
// POST -> đẩy dữ liệu lên 
// PUT -> update dữ liệu 
// DELETE -> xoá dữ liệu

// Sử dụng api. 