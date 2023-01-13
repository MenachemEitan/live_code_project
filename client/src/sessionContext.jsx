import { createContext, useState } from "react";
export const SessionContext = createContext();
const Provider = SessionContext.Provider;

export const SessionProvider = (props) =>{
    const [session, setSession] = useState(false);
    return(
        <Provider value={{session, setSession}}>
            {props.children}
        </Provider>
    )
}