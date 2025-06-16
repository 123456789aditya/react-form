import { useReducer } from "react"

export const UseReducer=()=>{
   
    const reducer=(state,action)=>{
        if(action.type=="INC"){
            return state+1
        }
        if(action.type=="DEC"){
            return state-1
        }
        if(action.type="RESET"){
            return state=0
        }

    }
    const [count, dispatch] = useReducer(reducer, 0);

    return(
        <>
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch({type:"INC"})}>INC</button>
            <button onClick={()=>dispatch({type:"DEC"})}>DEC</button>
            <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
        </div>
        
        </>
    )
}

