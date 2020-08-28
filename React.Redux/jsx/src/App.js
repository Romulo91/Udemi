import React from "react";
import "./App.css";

const App = () => {
  const buttonText = "Click me, pls!";
  const LabelText = "Enter name";

  return (
    <div>
      <label className="label" htmlFor="name">
        {LabelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

export default App;
