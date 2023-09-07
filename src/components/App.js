import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
   
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/directors" component={Directors} />
          <Route path="/actors" component={Actors} />
        </Switch>
      </div>
    
  );
}

export default App;
