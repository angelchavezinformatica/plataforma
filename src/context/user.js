import { createContext, useState } from "react";

export const contextUser = createContext({});

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = { user, setUser };

  return <contextUser.Provider value={value}>{children}</contextUser.Provider>;
}
