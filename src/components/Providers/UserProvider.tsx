'use client'; // Required if using Next.js App Router

import { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  avatar: string;
  isOnline: boolean;
  type?: 'provider' | 'manager';
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

// {
//   name: 'John Doe',
//   email: 'neis@mai.com',
//   avatar: '/images/boxer-avatar.jpg',
//   isOnline: true,
//   type: 'manager',
// }

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => setUser(null); // Clear user data on logout

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for accessing user data
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
