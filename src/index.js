import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import { Provider } from "react-redux";
import Todo from "../src/view/Todo";
import store from "./state/store";

class App extends React.Component {
  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
