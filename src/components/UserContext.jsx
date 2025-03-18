import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUsername] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

export function logout() {
  localStorage.removeItem('usuari');
  location.reload();
}

export function useUser() {
  return useContext(UserContext);
}
