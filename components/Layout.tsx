import { ReactNode, useEffect, useState } from "react";
import { Nav } from "./Nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-4xl py-8 m-auto">
      <Nav />
      {children}
    </div>
  );
}
