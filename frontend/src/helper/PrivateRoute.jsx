import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute = ({ component: Component, ...rest }) => {
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
