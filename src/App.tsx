import React from "react";
import "antd/dist/antd.css";
import Layout from "./layout/Layout";
import { IRoute, routes } from "./router/routes";
import { Route } from "react-router-dom";
import PrivateRoute from "./router/privateRoute";

function App() {
  return (
    <div className="App">
      <Layout>
        {routes.map((route: IRoute) =>
          route.private ? (
            <PrivateRoute key={route.name} path={route.path} exact={route.exact} component={route.component} />
          ) : (
            <Route
              key={route.name}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          )
        )}
      </Layout>
    </div>
  );
}

export default App;
