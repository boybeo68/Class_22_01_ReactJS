import React from "react";
import { useParams } from "react-router-dom";

export default function DetailProfile({ invoices }) {
  const params = useParams();
  const item = invoices.find((item) => item?.name === params?.name);
  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{item.amount}</h2>
      <h2>{item.due}</h2>
      <h2>{item.number}</h2>
    </div>
  );
}
