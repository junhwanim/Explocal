import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Navbar from './components/Navbar'

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact />
      </Switch>
    </Router>
  );
}

export default App;
