import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/header/header.jsx";
import './App.css'
import { Footer } from "./components/footer/footer.jsx";
import Dashboard from './components/dashboard/dashboard'

const App = () => {
  return (
    <div id="app">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
