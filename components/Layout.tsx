import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl m-auto">
      <h1>Hi</h1>
      {children}
    </div>
  );
}
