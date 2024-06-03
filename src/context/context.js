'use client'
import { createContext, useContext, useState } from "react";


export const microContext = createContext({})

export const MicroContextProvider = ({children}) => {
    const [mintCard, setMintCard] = useState(false)
    const [redeemCard, setRedeemCard] = useState(false)
    const value = {
        mintCard, 
        redeemCard, 
        setRedeemCard,
        setMintCard
    }
    return (
        <microContext.Provider value={value}>
           {children}
        </microContext.Provider>
    )
}

export const GlobalContext = () => useContext(microContext)