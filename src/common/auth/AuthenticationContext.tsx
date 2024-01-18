import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { Auth, getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { firebaseApp } from "../../firebaseConfig";

type AuthContextValue = {
    user: User | null
    auth: Auth
}

const context = createContext<AuthContextValue>(undefined!)
export const useAuthenticationContext = () => useContext(context)

export const AuthenticationContext: FC<{children: ReactNode}> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const auth = getAuth(firebaseApp)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
        });
    
        return () => unsubscribe();
      }, [auth]);
    return <context.Provider value={{user, auth}}>
        { children }
    </context.Provider>
}