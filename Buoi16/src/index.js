let a = "Tung";
let c = 10;
let d = 20;
// code jsx ( js + xml ): html + logic trong cùng file
function Welcome() {
  return (
    <div className="content">
      <p>{c + d}</p>
      <a>link to google </a>
      <p>test</p>
    </div>
  );
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
