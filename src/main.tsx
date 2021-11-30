// import './style.css'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/tailwind.css";

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
const newDiv = document.createElement("div");
newDiv.id = "as-plugin";
newDiv.classList.add("as-preflight");
// newDiv.classList.add("fixed", "bottom-5", "right-10");
document.body.append(newDiv);
// const newDiv = document.getElementById("as-plugin");
ReactDOM.render(<App />, newDiv);
