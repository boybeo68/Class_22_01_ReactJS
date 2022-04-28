import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Post from "./features/posts/Post";
import Home from "./features/router/Home";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Post /> */}
      <Home />
    </div>
  );
}

export default App;
