import { useState, useEffect } from "react";
import Chart from "../component/Chart";
import Body from "./Body";
import Header from "./Header";
function RandomNumber(prop) {
  console.log("render");
  // Khai báo state data
  const [randomNumber, setRandomNumber] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [numberOfGuesing, setnumberOfGuesing] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [message, setmessage] = useState("");
  const [dataHeader, setDataHeader] = useState("data header");

  // lifecycle mouting
  const mouting = () => {
    console.log(prop.data); // Tung
    randomFunction();
  };
  useEffect(mouting, []);

  useEffect(() => {
    if (numberOfGuesing > 7) {
      alert("bạn thua rồi");
      newGame();
    }
  }, [numberOfGuesing]);
  // mouting, updating
  // nêu [] => mouting gọi duy nhất 1 lần khi khởi tạo
  //  nếu [numberOfGuesing] => mouting sẽ gọi mỗi khi numberOfGuesing thay đổi
  const randomFunction = () => {
    console.log(Math.random());
    let random = Math.floor(Math.random() * 100 + 1);
    setRandomNumber(random);
  };

  const onChangeValue = (event) => {
    setInputValue(parseInt(event.target.value));
    console.log(event);
  };
  const guess = () => {
    console.log("step 1", numberOfGuesing);
    setnumberOfGuesing(numberOfGuesing + 1); // bất đồng bộ
    if (inputValue === randomNumber) {
      setCorrect(true);

      newGame();
      alert("đoán đúng rồi");
    } else {
      if (inputValue > randomNumber) {
        setmessage("Số bạn đoán lớn quá");
      }
      if (inputValue < randomNumber) {
        setmessage("Số bạn đoán nhỏ quá");
      }
      // console.log("step 2", numberOfGuesing);

      setCorrect(false);
    }
  };

  const newGame = () => {
    randomFunction();
    setInputValue(0);
    setnumberOfGuesing(0);
    setmessage("");
  };

  const props = {
    randomNumberKey: randomNumber,
    correctKey: correct,
  };
  const changeTextChildABC = (dataChild) => {
    console.log(dataChild);
    setDataHeader(dataChild);
  };
  return (
    <div>
      {/* Header */}
      {/* key={value} */}
      {/*props: truyền dữ liệu từ cha sang con  */}
      <Header
        randomNumberKey={randomNumber}
        correctKey={correct}
        dataHeader={dataHeader}
        changeTextChild={changeTextChildABC}
      />
      {/* Body */}
      <Body
        numberOfGuesing={numberOfGuesing}
        inputValue={inputValue}
        message={message}
        newGame={newGame}
        onChangeValue={onChangeValue}
        guess={guess}
      />
      <p style={{ color: "red" }}>{prop.count}</p>
      <Chart />
      <button
        onClick={() => {
          prop.inCreeCount(4);
        }}
      >
        Incree
      </button>
    </div>
  );
}
// import và export
// lifecycle
export default RandomNumber;

// 1 data trong component: state (useState)
// 1 data truyền từ compnent cha -> component con (props)
// Khác nhau giữa state và props.
// props không thay đổi được
// state có thể thay đổi được
// truyền dữ liệu từ component con -> component cha
// render lại component: Khi state hoặc props thay đổi thì component sẽ render lại
// chart: biểu đồ chứng khoán. => performance.
// làm thế nào để khi state, props thay đổi => component chỉ render lại những thứ thực sự cần thiết
// vd: khi click newGame  -> Chart không bị render lại
