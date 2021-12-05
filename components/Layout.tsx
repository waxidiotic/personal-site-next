import { ReactNode, useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-4xl pt-8 m-auto">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
