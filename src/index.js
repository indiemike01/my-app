import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h4>Billy Doe</h4>;
const Message = () => <p>This is my message</p>;

ReactDom.render(<Greeting />, document.getElementById("root"));
