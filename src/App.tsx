import React from "react";
import "antd/dist/antd.css";
import Layout from "./layout/Layout";
import {routes} from "./routes";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
          {routes.map((route) =>
              <Route
                key={route.name}
                path={route.path}
                component={route.page}
              />
          )}
      </Layout>
    </div>
  );
}

export default App;
