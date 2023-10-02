import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode> <App /> </React.StrictMode>);

// Before React v18
// ReactDOM.render(<App/>, document.getElementById("root"));

