import Navber from "@/components/shared/Navber";
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div>
      <Navber />
      {children}
    </div>
  );
}
