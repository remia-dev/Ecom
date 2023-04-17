import React, {createContext, useState} from 'react'

// create context
type SidebarContextProviderProps = {
  children: React.ReactNode
}


export const SidebarContext = createContext()

const SidebarProvider = ({children}: SidebarContextProviderProps) => {

  // sidebar state 
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () =>{
    setIsOpen(false);
  }


  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>
      {children}
    </SidebarContext.Provider>

  )
}

export default SidebarProvider