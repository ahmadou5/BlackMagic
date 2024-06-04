'use client'
import { createContext, useContext, useState } from "react";


export const microContext = createContext({})

export const MicroContextProvider = ({children}) => {
    const [mintCard, setMintCard] = useState(false)
    const [sector, setSector] = useState('')
    const [industry, setIndustry] = useState('')
    const [ceo, setCeo] = useState('')
    const [quarter, setQuarter] = useState('')
    const [web, setWeb] = useState('')
    const [employee, setEmployee] = useState(0)
    const [founded, setFounded] = useState('')
    const [market, setMarket] = useState(0)
    const [info, setInfo] = useState('')
    const [imgS, setImgS] = useState('')
    const [redeemCard, setRedeemCard] = useState(false)
    const value = {
        mintCard, 
        redeemCard,
        sector, 
        industry,
        ceo, 
        web, 
        quarter, 
        employee, 
        founded, 
        market, 
        info, 
        imgS, 
        setImgS,
        setInfo,
        setMarket,
        setFounded,
        setEmployee,
        setQuarter,
        setWeb,
        setCeo,
        setIndustry,
        setSector, 
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