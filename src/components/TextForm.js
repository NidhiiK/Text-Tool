import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
  };
  const handleTrimClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.trim();
    setText(newText);
  };
  //to capitalize the first character of any string
  const handleCapitalClick = () => {
    let firstchar = text.charAt(0); // storing the first char of the string
    let newText = firstchar.toUpperCase(); // converting that to uppercase
    setText(newText + text.slice(1)); // printing it with rest excluding the first char by using slice
  };
  const handleonChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1> {props.heading}</h1>
        <div className="mb-3">
          {/* <label for="mybox" className="form-label">
          Example textarea
        </label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            id="mybox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary " onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleTrimClick}>
          Trim Text
        </button>
        <button className="btn btn-primary" onClick={handleCapitalClick}>
          Capitalize first Letter
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words ad {text.length} characters
        </p>
        <p>{0.01 * text.split(" ").length} Minute read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
