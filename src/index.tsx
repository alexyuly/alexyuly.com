import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const app = <App />;
const target = document.getElementById("react-target");

ReactDOM.render(app, target);
