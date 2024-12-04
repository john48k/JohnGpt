import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/Homepage";
import DashboardPage from "./routes/dashboardPage/DashBoardPage";
import ChatPage from "./routes/chatPage/ChatPage";
import { Link, Outlet } from "react-router-dom";
import RootLayout from "./layouts/rootLayout/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path:"/", 
        element: <Homepage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
