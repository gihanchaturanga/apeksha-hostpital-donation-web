import "./App.css";

import { BrowserRouter as Nav } from "react-router-dom";
import { RouteConfig } from "./utils/RouteConfig";
import { FloatingActionBtn } from "./common/FloatingActionBtn/FloatingActionBtn";

function App() {
  return (
    <Nav>
      <RouteConfig />
      <FloatingActionBtn />
    </Nav>
  );
}

export default App;
