import { useId } from "react"

export const UseId=()=>{
    const userName=useId();
    const userEmail=useId();
    return(
        <>
        <form>
            <div>
                <label htmlFor="userName">UserName:</label>
                <input type="text" name="name"id="userName"/>
            </div>
            <div>
                <label htmlFor="userEmail">Email</label>
                <input type="email" name="email"id="userEmail"/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
          
        </form>
        </>
    )
}