import "./App.css";
import Login from "./components/UserAuth/Login";
import ErrorScreen from "./components/ErrorScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import Product from "./pages/product";
import TestPage from "./pages/testPage";

function App() {
  const LoginRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorScreen />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorScreen />,
    },
    {
      path: "/product",
      element: <Product />,
      errorElement: <ErrorScreen />,
    },
    {
      path: "/test",
      element: <TestPage />,
      errorElement: <ErrorScreen />,
    },
  ]);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      window.location.href = `${window.location}login`;
    }
  }, []);
  return (
    <div className="App">
      <RouterProvider router={LoginRouter} />
    </div>
  );
}

export default App;
