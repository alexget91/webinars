import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import "../sass/style.scss";

const init = () => {
  ReactDOM.render(
    <App/>,
    document.querySelector(`#root`)
  );
};

init();
