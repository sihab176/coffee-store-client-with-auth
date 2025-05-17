import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root/Root.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import Login from "./components/authentiction/Login.jsx";
import Singup from "./components/authentiction/Singup.jsx";
import AuthProvider from "./context/authProvider.jsx";
import Users from "./components/Users.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://v1-coffee-store-server-psi.vercel.app/coffees"),
        Component: Home,
      },
      { path: "/addCoffee", Component: AddCoffee },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://v1-coffee-store-server-psi.vercel.app/coffees/${params.id}`
          ),
        Component: UpdateCoffee,
      },
      {
        path: "/coffeeDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://v1-coffee-store-server-psi.vercel.app/coffees/${params.id}`
          ),
        Component: CoffeeDetails,
      },
      { path: "/login", Component: Login },
      { path: "/signUp", Component: Singup },
      {
        path: "/user",
        loader: () =>
          fetch("https://v1-coffee-store-server-psi.vercel.app/users"),
        Component: Users,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
