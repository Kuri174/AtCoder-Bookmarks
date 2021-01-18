import React from "react";
import ReactDOM from "react-dom";
import Topbar from "./Topbar";
import Tabs from "./Tabs";
import "./style.css";

function App() {
  
  return (
    <div>
      <Topbar />
      <Tabs />
    </div>
  );
}

const target = document.querySelector("#app");
ReactDOM.render(<App />, target);
