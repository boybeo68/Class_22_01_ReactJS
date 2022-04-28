import React from "react";
import AuthRouter from "./AuthRouter";

export default function About() {
  return (
    <div>
      About
      <AuthRouter>
        <h5>childrent cua Authen</h5>
      </AuthRouter>
      <AuthRouter/>
    </div>
  );
}
