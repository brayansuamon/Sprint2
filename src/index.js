import ReactDOM from "react-dom";

import App from "./App";
import Statecontext from "./context/Statecontext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Statecontext>
    <App />
  </Statecontext>,
  rootElement
);
