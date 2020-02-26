import React from "react";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import Home from './components/Home';
import Listings from "./components/Listings";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" component={Home} exact />
          <PrivateRoute path="/listings" component={Listings} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;