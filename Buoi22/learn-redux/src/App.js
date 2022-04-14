import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";

function CuParent(props) {
  return (
    <div>
      <div>CuParent</div>
      <OngParent data={props.data} setNewNameOng={props.setNewNameCu} />
    </div>
  );
}
function OngParent(props) {
  return (
    <div>
      <div>OngParent</div>
      <ChaParent data={props.data} setNewNameCha={props.setNewNameOng} />
    </div>
  );
}
function ChaParent(props) {
  return (
    <div>
      <div>ChaParent</div>
      <Con data={props.data} setNewNameCon={props.setNewNameCha} />
    </div>
  );
}

function Con(props) {
  const nameFromStore = useSelector((state) => state.test);
  return (
    <div>
      <p>Con</p>
      <p>{props.data}</p>
      <p>{nameFromStore}</p>
      <button
        onClick={() => {
          props.setNewNameCon("Trinh");
        }}
      >
        Change Name
      </button>
    </div>
  );
}

// App -> CuParent -> OngParent -> ChaParent -> Con
function App() {
  const [name, setName] = useState("Tung");
  const nameFromStore = useSelector((state) => state.test);
  console.log(nameFromStore);
  const setNewName = (params) => {
    setName(params);
  };

  return (
    <div>
      <div>App</div>
      <p>{name}</p>
      <p>{nameFromStore}</p>
      <CuParent data={name} setNewNameCu={setNewName} />
    </div>
  );
}
// chỉ những dữ liệu cần truyền qua lại giữa nhiều component mới cần sử dụng redux để lưu data
// màn hình login -> lấy được dữ liệu thông tin user.
// changePass cần thông tin user này để thay đổi pass
// lấy dữ liệu từ store sử dụng useSelector
export default App;
