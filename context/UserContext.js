// src/context/UserContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../utils/userInfo";

// Create the UserContext with default value as null
const UserContext = createContext(null);

// Create a custom hook to access user data
export const useUser = () => {
  return useContext(UserContext);
};

// Create the UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser(); // Fetch user data
      setUser(currentUser); // Set user data to state
    };

    fetchUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
