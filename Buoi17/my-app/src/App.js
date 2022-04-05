import React, { useState } from "react";
import Body from "./component/Body";
import Button from "./component/Button";
import LearnStyle from "./component/LearnStyle";
import RandomNumber from "./randomGame/RandomNumber";

export default function App() {
  const [count, setcount] = useState(10);
  const inCreeCount = (params) => {
    setcount(count + params);
  };

  return (
    <div className="wrap">
      <RandomNumber data={"Tung"} count={count} inCreeCount={inCreeCount} />
    </div>
  );
}
