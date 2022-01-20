import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { MintProvider } from "./context/MintContext.jsx";
import "./index.css";

ReactDOM.render(
  <MintProvider>
    <App />
  </MintProvider>,
  document.getElementById("root"),
);
