import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

const routers = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const Routers = () => {
  return <RouterProvider router={routers} />;
};
export default Routers;
