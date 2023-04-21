import "./App.css";

import { BrowserRouter as Nav } from "react-router-dom";
import { RouteConfig } from "./utils/RouteConfig";

function App() {
  return (
    <Nav>
      <RouteConfig />
    </Nav>
  );
}

export default App;
