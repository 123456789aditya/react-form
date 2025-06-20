// import { createContext } from "react";

import { createContext, useContext } from "react";

export const BioContext=createContext();
export const BioProvider=({children})=>{
    const myName="vinod"
    return(
        <>
        <BioContext.Provider value={myName}>\
            {children}
            
        </BioContext.Provider>
        </>
    )
}

export const useBioContext=()=>{
  
        const context=useContext(BioContext)
        return context
 
}

