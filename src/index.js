import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/header/header.jsx";
import "./App.css";
import { Footer } from "./components/footer/footer.jsx";
import Dashboard from "./components/dashboard/dashboard";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


const options = {
  timeout: 3000,
  position: positions.TOP_CENTER
};

const App = () => {
  return (
    <div id="app">
      <Provider template={AlertTemplate} {...options}>
        <Header />
        <Dashboard />
        <Footer />
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
