import Header from "@/components/shared/header";
import Marquee from "@/components/shared/marquee";
import Navber from "@/components/shared/Navber";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <Marquee />
      <Navber />
      {children}
    </div>
  );
}
