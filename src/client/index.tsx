// Import required modules
import React from "react";
import ReactDOM from "react-dom";

// Supports SCSS!
import "./styles.scss";
import { App } from "./App";

// Define our container
const root = document.createElement("div");
root.id = "root";

document.title = "React Tailwind";

// Render!
ReactDOM.render(<App />, document.body.appendChild(root));
