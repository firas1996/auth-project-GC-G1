import React from "react";

import classes from "./Navigation.module.css";
import AuthStore from "../../stores/auth-store";

const Navigation = () => {
  return (
    <AuthStore.Consumer>
      {({ isLoggedIn, logoutHandler }) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  <button onClick={logoutHandler}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthStore.Consumer>
  );
};

export default Navigation;
