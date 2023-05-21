import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './Pages/Home';
import { AuthProvider } from "./Provider/AuthProvider";
import "./index.css"
import ProtectedRoute from './Routes/ProtectedRoute';
import LoginForm from './Pages/Login';
import RegisterForm from './Pages/Register';
import NewToy from './Pages/NewToy';
import AllToysComponent from './Pages/Alltoys';
import Detials from './Pages/Details';
import MyToy from './Pages/MyToy';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/new",
    element: <ProtectedRoute><NewToy /></ProtectedRoute>,
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
    path: "/alltoys",
    element: <AllToysComponent />,
  },
  {
    path: "/view",
    element: <ProtectedRoute><Detials /></ProtectedRoute>,
  },
  {
    path: "/mytoys",
    element: <ProtectedRoute><MyToy /></ProtectedRoute>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
