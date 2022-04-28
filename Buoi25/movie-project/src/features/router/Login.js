import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../user/userSlice";

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login("dalogin"));
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
}
