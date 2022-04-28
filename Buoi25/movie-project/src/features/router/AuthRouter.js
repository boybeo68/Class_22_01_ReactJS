import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthRouter({ children }) {
  const authen = useSelector((state) => state?.user?.data);
  if (!authen) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
}
