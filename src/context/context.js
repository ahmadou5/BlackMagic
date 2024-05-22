'use client'
import { createContext, useContext, useState } from "react";


export const microContext = createContext({})

export const MicroContextProvider = ({children}) => {
    const value = {}
    return (
        <microContext.Provider value={value}>
           {children}
        </microContext.Provider>
    )
}

export const GlobalContext = () => useContext(microContext)