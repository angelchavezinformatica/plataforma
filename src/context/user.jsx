import { createContext, useContext, useState } from "react";

const userContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  return useContext(userContext);
};

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [tokens, setTokens] = useState(null);

  const value = { user, setUser, tokens, setTokens };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
