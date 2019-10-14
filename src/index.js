import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/header/header.jsx";
import './App.css'
import { Footer } from "./components/footer/footer.jsx";

const App = () => {
  return (
    <div id="app">
      <Header />
      <div></div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
