import React, { Component, useReducer } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Identification from "./pages/Identification";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./components/HomePage";
import KmUpdate from "./components/KmUpdate";
import AddCar from "./pages/AddCar";

const { siteTitle } = require("./conf.js");

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(state => state.user);
  return (
    <Route
      {...rest}
      render={Component =>
        user.token ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: `/identification`,
              state: { from: rest }
            }}
          />
        )
      }
    ></Route>
  );
};

export default function App() {
  document.title = siteTitle || "Shiny Hedgehog";

  return (
    <div className="App">
      <Switch>
        <Route path="/identification" component={Identification} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute exact path="/AddCar" component={AddCar}></PrivateRoute>
        <PrivateRoute
          exact
          path="/kmupdate"
          component={KmUpdate}
        ></PrivateRoute>
        <PrivateRoute path="/" component={HomePage}></PrivateRoute>
      </Switch>
    </div>
  );
}
