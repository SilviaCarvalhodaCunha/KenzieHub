import React from "react";
import { TechsProviders } from "../../contexts/TechsContext";
import { UserProvider } from "../../contexts/UserContext";

export function Providers({ children }) {
  return (
    <UserProvider>
      <TechsProviders>
        {children}
      </TechsProviders>
    </UserProvider>
  );
}
