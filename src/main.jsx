import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/Homepage";
import DashboardPage from "./routes/dashboardPage/DashBoardPage";
import ChatPage from "./routes/chatPage/ChatPage";
import { Link, Outlet } from "react-router-dom";
import RootLayout from "./layouts/rootLayout/RootLayout";
import DashboardLayout from "./layouts/rootLayout/dashboardLayout/DashboardLayout.jsx";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import SignInPage from "./routes/signInPage/signInPage.jsx";
import SignUpPage from "./routes/signUpPage/signUpPage.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        path: "/",
        element: <Homepage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
