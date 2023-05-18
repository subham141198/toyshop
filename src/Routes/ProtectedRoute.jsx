/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <div className="row vh-100 justify-content-center align-items-center"><div className="spinner"></div></div>
        
      </>
    );
  }


  if (!user) {
    return <Navigate state={{ from: location }} to="/login" replace/>;
  }
  return children;
};
export default ProtectedRoute;
