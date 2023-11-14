import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuRoute from "./routes/MenuRoute";
import AboutRoute from "./routes/AboutRoute";
import "./index.css";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <MenuRoute />,
  },
  {
    path: "/about",
    element: <AboutRoute />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
