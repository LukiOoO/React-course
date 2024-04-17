import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import logger from "./services/logService";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

// logger.init(); this logger erros in sentry.io

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
