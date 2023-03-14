import { ReactNode } from "react";

export function Border({ children }: { children: ReactNode }) {
  return <div style={{ border: "1px solid blue" }}>
    {children}
  </div>
}