import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

// css
import "./index.css";
import "antd/dist/antd.css";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
