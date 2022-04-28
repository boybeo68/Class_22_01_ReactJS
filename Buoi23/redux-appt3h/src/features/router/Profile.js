import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({ invoices }) {
  const navigate = useNavigate();
  console.log(invoices);
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
