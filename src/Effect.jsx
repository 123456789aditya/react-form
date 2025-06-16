////Example-1

import { useEffect,useState } from "react"
// export const UseEffect=()=>{
//     useEffect(()=>{
//         console.log("hello,UseEffect")
//     },[]);
//     return(
//         <>
//         <h1>hello,useEffect</h1>
//         </>
//     )
// }

////Example-2 of useEffect

// export const Effect=()=>{
//     const[count,setCount]=useState(0);
//     useEffect(()=>{console.log("count value",count);

//     },[count]);

//     return(
//         <>
//         <button onClick={()=>setCount(count+1)}>CLick Here</button>
//         <h2>Count:{count}</h2>
//         </>
//     )
// }



// export const Challenge=()=>{
    
//     const[count,setCount]=useState(0)
//     const[fname,setFname]=useState("")
//     useEffect(()=>{console.log(fname);

//     },[fname])


//     return(
//         <>
//         <h1>useeffect challenge</h1><br/>
//         <h3>count:<span>{count}</span></h3><br/>
//         <button onClick={()=>setCount(count+2)}>Click</button>
//         <h4>name<span>{fname}</span></h4>
//         <input type="text" value={fname} onChange={(event)=>setFname(event.target.value)}></input>


//         </>
//     )
// }

////my live youtube subscribers list by using useEffect hook

export const Challenge=()=>{
    const[count,setCount]=useState(0)
    useEffect(()=>{
        const tim=setInterval(()=>{
            setCount((previous)=>previous+1)
        },1000);
        return()=>{clearInterval(tim)

        }
        
    },[])
    return(
        <>
        <div>
            <h1>UseEffect Challenge</h1>
            <h2>My subscribers</h2>
            <br/>
            <div>
                <h3>
                    <span>{count}</span>
                </h3>
            </div>
        </div>
    
        </>
    )
}