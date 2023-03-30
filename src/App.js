import "./App.css";
import React, { useEffect } from "react";
import Login from "./components/UserAuth/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Products from "./pages/products";
import ProtectedRoute from "./routes/protectedRoute";
import Cookies from "universal-cookie";

function App() {
  const cookies = new Cookies();

  const isAuth = cookies.get("authToken");

  useEffect(() => {
    let pathName = window.location.pathname;
    if (pathName === "/login" && isAuth && isAuth !== "undefined") {
      window.location.href = `${window.location.origin}/products`;
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/products" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
