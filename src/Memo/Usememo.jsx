import { useMemo, useState } from "react"

const Total=()=>{
    let i=0;
    for(i=0;i<=10000;i++){
        
    }
    return(
        <>
        <p>{i}</p>

        </>
    )
    const total=useMemo(()=>Total(),[])
}
export const Usememo=()=>{
    const[count,setCount]=useState(0)
    return(
        <>
        <Total/>
        <div>
            <button onClick={()=>setCount(count+1)}>CLICK</button>
            <p>Parent renders:{count}</p>
        </div>
        </>
    )
}