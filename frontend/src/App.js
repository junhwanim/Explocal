import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Locals from "./pages/Locals";
import LocalDetail from "./pages/LocalDetail";
import Profile from "./pages/Profile";
import { AnimatePresence} from "framer-motion";

function AppLocation() {
  const location = useLocation();

  return (
    <main style={{ position: "relative", width: "100vw"}}>
    <AnimatePresence  >
      <Switch location={location} key={location.pathname}>
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
          <LocalDetail />
        </Route>
        <Route exact path="/user/profile">
          <Profile />
        </Route>
      </Switch>
    </AnimatePresence>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter style={{width: "100vw"}}>
      <AppLocation />
    </BrowserRouter>
  );
}

export default App;
