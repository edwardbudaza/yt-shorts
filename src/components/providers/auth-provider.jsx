'use client';

import { auth } from '@/configs/firebaseConfig';
import { AuthContext } from '@/context/auth-context';
import { onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    </div>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
