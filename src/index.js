import React from "react";
import ReactDOM from "react-dom";

import FormComponent from "./form";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <FormComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
