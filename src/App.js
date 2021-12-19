import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Home } from "./peges/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
