'use client';

import { AuthContext } from '@/context/auth-context';
import { useMutation } from 'convex/react';
import { onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';

import { api } from '../../../convex/_generated/api';
import { auth } from '@/configs/firebaseConfig';

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const CreateUser = useMutation(api.users.CreateNewUser);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // Check if the user exists
      if (user) {
        const result = await CreateUser({
          name: user.displayName,
          email: user.email,
          pictureURL: user.photoURL,
        });

        setUser(result);
        console.log(result);
      }
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
