import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";

import resources from "./configs/locales/en.json";
import FormComponent from "./form";

import "./styles.css";

// initialize i18next with catalog and language to use
i18n.init({
  resources,
  lng: "en"
});

function App() {
  return (
    <div className="App">
      <FormComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
