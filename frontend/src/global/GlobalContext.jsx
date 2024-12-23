import api from "../api/api";
import { createContext } from "react";


export const GlobalContext = createContext ()

export const GlobalProvider = ({children}) => {

    const contextValue = {

    }
    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}
