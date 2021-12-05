import { ReactNode } from "react";

import { Footer } from "./Footer";
import { Nav } from "./Nav";

// eslint-disable-next-line import/no-default-export
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-4xl pt-8 m-auto">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
