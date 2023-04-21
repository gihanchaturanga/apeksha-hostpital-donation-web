import React from "react";
import "./App.css";
import ResponsiveAppBar from "./common/top_nav/TopNav";
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
