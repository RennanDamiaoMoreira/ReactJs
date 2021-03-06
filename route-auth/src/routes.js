import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAutenticated } from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAutenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1> Hello World </h1>} />
      <PrivateRoute path="/app" component={() => <h1> Tu ta logado </h1>} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
