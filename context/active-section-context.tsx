"use client"
import React, { useState, createContext } from 'react'
import { links } from '@/constants/data' 

type SectionName = (typeof links)[number]['name']

type ActiveSectionContextType = {
    active: SectionName
    setActive: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({ children}: {children: React.ReactNode}) => {
    const [active, setActive] = useState<SectionName>('Home')
    const [ timeOfLastClick, setTimeOfLastClick ] = useState<number>(0)

  return (
    <ActiveSectionContext.Provider
    value={{ 
        active, 
        setActive,
        timeOfLastClick,
        setTimeOfLastClick
    }}
    >{children}</ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider

export function useActiveSectionContext() {
    const context = React.useContext(ActiveSectionContext)
    if (context === null) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
    }
    return context
}