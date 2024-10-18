import React, { useContext } from "react";
import { UserContext } from "../Services/UserContext";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user || user.user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
