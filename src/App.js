import "./App.css";

import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
function App() {
  const [count, setCount] = useState(0);
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, SetBtnText] = useState("Enable Dark mode");
  const toogleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      SetBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      SetBtnText("Enable Dark Mode");
    }
  };
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  // setCount(5);

  return (
    <>
      <NavBar />
      <div style={myStyle} class="container">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <div className="container center">
          <button
            onClick={toogleStyle}
            type="button"
            className="btn btn-primary"
          >
            {" "}
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
