//React.memo()  is a higher order component that we can use to wrap componemts that we do not want to re render 
// --unless props witihin them changed
//syntax: memo(Counts)
//useMemo is a react hook used for memorization
//use it when u dont want exceqution or re-rendering of functions on every call



import { useState } from "react"

export const ReactMemo=()=>{
    const[count,setCount]=useState(0)
    return(
        <>
        <div>
            <h1>{count}</h1>
            <button onClick={setCount((previous)=>previous+1)}>CLICK</button>
        </div>
        </>
    )
}




