import "./App.css";
import Login from "./components/UserAuth/Login";
import ErrorScreen from "./components/ErrorScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import Product from "./pages/product";

function App() {
  const LoginRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorScreen />,
    },
    {
      path: "/product",
      element: <Product />,
      errorElement: <ErrorScreen />,
    }
  ]);
  useEffect(() => {
    console.log(process.env);
  }, []);
  return (
    <div className="App">
      <RouterProvider router={LoginRouter} />
    </div>
  );
}

export default App;
