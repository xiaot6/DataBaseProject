import React from "react";

import { Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";

function Login() {
  const user = null;
  return (
        user ?
        <ProfilePage />
        :
        <Switch>
            <Route exact path="" component={SignIn} />
            <Route exact path="signUp" component={SignUp} />
            <Route exact path="passwordReset" component={PasswordReset} />
        </Switch>
  );
}
export default Login;