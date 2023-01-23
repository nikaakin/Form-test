import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./css/index.scss";
import ErrorPage from "./ErrorPage";
import Login from "./Login";
import SignUp from "./SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "users/:userId",
        element: <></>,
      },
    ],
  },

  {
    path: "/me",
    element: <ErrorPage message="Under development!" />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
