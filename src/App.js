import React from "react";
import logo from "./logo.svg";
import tailwind from "./tailwind.png";
import "./App.css";
import "./index.css";
function App() {
  return (
    <div className="App">
      <header className="App-header bg-aqua">
        <div className="flex items-center">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={tailwind} className="tailwind-logo" alt="logo" />
        </div>
        <p>React & Tailwind Boilerplate template</p>
        <div className="flex justify-around mt-5">
          <a
            className="App-link mx-5"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs
          </a>
          <a
            className="App-link"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind Docs
          </a>
        </div>
        <p className="mt-5">Edit src/App.js</p>
      </header>
    </div>
  );
}

export default App;
