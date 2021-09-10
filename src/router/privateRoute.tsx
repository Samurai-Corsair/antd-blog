import React, {FC} from "react";
import {Redirect, Route} from "react-router-dom";
import { TPrivateRoute } from "./routes";

const PrivateRoute: FC<TPrivateRoute> = (props) => {
  const isAuthorized = localStorage.getItem("token");
  const { component: Component } = props;
  return (
    <Route
      path={props.path}
      exact={props.exact}
      component={() =>
        isAuthorized ? <Component /> : <Redirect to={"/sign-in"} />
      }
    />
  );
};

export default PrivateRoute;
