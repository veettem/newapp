import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

const ProtectedRoute = (props) => {
  const cookies = new Cookies();
  const [authToken, setAuthToken] = useState(cookies.get("authToken"));

  useEffect(() => {
    setAuthToken(cookies.get("authToken"));
  }, []);

  const isAuth = authToken && authToken !== "undefined";

  return <>{isAuth ? <Route {...props} /> : <Redirect to="/login" />}</>;
};

export default ProtectedRoute;
