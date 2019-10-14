import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/header/header.jsx";

const App = () => {
  return (
    <div id="app">
      <Header />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
