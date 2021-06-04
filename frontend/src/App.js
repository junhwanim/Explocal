import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Locals from './pages/Locals'
import LocalDetail from "./pages/LocalDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/locals/:city">
          <Locals />
        </Route>
        <Route exact path="/local/:id">
          <LocalDetail/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
