import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Homepage from './Pages/Homepage';
import { AuthProvider } from "./Provider/AuthProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './Routes/ProtectedRoute';
import LoginForm from './Pages/Login';
import RegisterForm from './Pages/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
