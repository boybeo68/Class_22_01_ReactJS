import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../user/userSlice";

export default function Profile({ invoices }) {
  const navigate = useNavigate();

  return (
    <div>
      {invoices.map((item, index) => {
        return (
          <button
            onClick={() => {
              navigate(`/profile/${item.name}`);
            }}
            key={index}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
