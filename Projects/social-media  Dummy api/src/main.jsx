import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
// import App from "./App.jsx";
import App from "./App.jsx";
import CreatePost from "./components/CreatePost.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/", element: <App /> },
  { path: "/create-post", element: <CreatePost /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
