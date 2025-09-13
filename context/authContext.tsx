"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type UserContextType = {
  accountID: string;
  role: string| undefined;
  setAccountID: (username: string) => void;
  setRole: (role: string|undefined) => void;
  authToken: string;
  setAuthToken: (authToken: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [accountID, setAccountID] = useState<string>("");
  const [role,setRole] = useState<string|undefined>(undefined);
  const [authToken, setAuthToken] = useState<string>("")

  return (
    <UserContext.Provider value={{ accountID, role, setAccountID, setRole, authToken, setAuthToken }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}