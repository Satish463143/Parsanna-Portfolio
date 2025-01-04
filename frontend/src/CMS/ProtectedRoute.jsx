import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRoute = ({ children }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const token = localStorage.getItem("_at");

  if (!loggedInUser && !token) {
    toast.error("Plase login to proceed ahead")
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;
