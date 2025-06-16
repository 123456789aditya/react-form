import { useRef } from "react"

export const UseRefs=()=>{
    const HandleFormSubmit=(event)=>{
        event.preventDefault()
        console.log(username.current.value,password.current.value)
    }
    const username=useRef(null)
    const password=useRef(null)
    return(
        <>
        <form onSubmit={HandleFormSubmit}>
            <input type="text" id="username" ref={username}/>
            <br/>
            <input type="text" id="password" ref={password}/>
            <button>Submit</button>
        </form>

        </>
    )
}



