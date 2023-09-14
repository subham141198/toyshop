import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider, AuthContext } from './Provider/AuthProvider'; // Assuming you have an AuthContext
import './index.css';
import ProtectedRoute from './Routes/ProtectedRoute';
import Homepage from './Pages/Home';
import LoginForm from './Pages/Login';
import RegisterForm from './Pages/Register';
import NewToy from './Pages/NewToy';
import AllToysComponent from './Pages/Alltoys';
import Detials from './Pages/Details';
import MyToy from './Pages/MyToy';

const App = () => {
  const { user } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: '/new',
      element: <ProtectedRoute>{user ? <NewToy /> : <LoginForm />}</ProtectedRoute>,
    },
    {
      path: '/login',
      element: user ? <Homepage /> : <LoginForm />,
    },
    {
      path: '/register',
      element: user ? <Homepage /> : <RegisterForm />,
    },
    {
      path: '/alltoys',
      element: <AllToysComponent />,
    },
    {
      path: '/view',
      element: <ProtectedRoute>{user ? <Detials /> : <LoginForm />}</ProtectedRoute>,
    },
    {
      path: '/mytoys',
      element: <ProtectedRoute>{user ? <MyToy /> : <LoginForm />}</ProtectedRoute>,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
