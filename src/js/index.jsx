import "../sass/style.scss";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";
import App from "./components/app/app";
import {Operation, reducer} from "./reducer/reducer";

const init = () => {
  const store = createStore(reducer);

  store.dispatch(Operation.loadCards);

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
