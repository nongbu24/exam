import React, { useState } from 'react';
import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import CreatePage from "./pages/CreateMovie";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import './index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/CreateMovie",
        element: <CreatePage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;