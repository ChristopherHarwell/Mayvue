import React, { useState } from "react";
import "./App.css";

function App() {
  const [textValue, setTextValue] = useState({
    text: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    e.persist();

    setTextValue({
      [e.target.name]: e.target.value,
    });
    console.log(textValue);
  };

  // textbox styling
  let inputStyle = {
    border: "1px solid black",
  };

  // input border conditional styling
  if (textValue.text.length > 20) {
    inputStyle = {
      border: "3px solid red",
    };
  }

  // number of button clicks
  const [buttonClicks, setButtonClicks] = useState(0);

  const numButtonClicks = () => {
    return setButtonClicks(buttonClicks + 1);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <label>{textValue.text}</label>
        <input
          style={inputStyle}
          name="text"
          onChange={handleChange}
          type="textbox"
        />
      </form>
      <button onClick={numButtonClicks}>Click Me</button>
      <label> Number of button clicks: {buttonClicks}</label>
    </div>
  );
}

export default App;
