import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { getToken } from "../lib/storage/token.storage";

interface AuthInterface {
    session: boolean;
    setSession: Dispatch<SetStateAction<boolean>>
}

const defaultContext: AuthInterface = {
    session: false,
    setSession: () => {}
}

const AuthContext = createContext<AuthInterface>(defaultContext);

const AuthProvider = ({children}:{children:ReactNode}) => {
    const tokenFound = getToken();
    const [session, setSession] = useState(tokenFound ? true : false);

    return (
        <AuthContext.Provider value={{session, setSession}}>
            {children}
        </AuthContext.Provider>
    )
}

const useSession = () => useContext(AuthContext);

export {useSession, AuthProvider}
