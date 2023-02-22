import React from "react";
import { UserProvider } from "../../contexts/UserContext";

export function Providers({children}) {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
}