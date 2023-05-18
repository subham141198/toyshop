import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './Pages/Home';
import { AuthProvider } from "./Provider/AuthProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './Routes/ProtectedRoute';
import LoginForm from './Pages/Login';
import RegisterForm from './Pages/Register';
import NewToy from './Pages/NewToy';
import AllToysComponent from './Pages/Alltoys';



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
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
