import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div id="navbar">
      {!isAuthenticated && (
        <button
          type="button"
          id="greenbutton"
          className="btn btn-success"
          onClick={() => loginWithRedirect({})}
        >
          Log in
        </button>
      )}

      {isAuthenticated && (
        <button type="button" id="redbutton" class="btn btn-danger" onClick={() => logout()}>
          Log out
        </button>
      )}
      {isAuthenticated && (
        <span>
          <NavLink
            className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: "yellow" }}
            to="/"
          >
            Home
          </NavLink>
          &nbsp;
          <NavLink
            className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: "#0CBFB3" }}
            to="/listings"
          >
            Listings
          </NavLink>
          <NavLink
            className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: "#0CBFB3" }}
            to="/profile"
          >
            Profile
          </NavLink>
        </span>
      )}
    </div>
  );
};

export default NavBar;
