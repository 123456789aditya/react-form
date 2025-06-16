
import { BioContext, useBioContext } from "./Contextapi"

export const Home=()=>{
    const myName=useBioContext()
    return(
        <>
        <h1>Home API context{myName}</h1>
        
        </>
    )
}
