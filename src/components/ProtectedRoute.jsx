import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const autht = localStorage.getItem("logedIn");

  return autht ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoute;
