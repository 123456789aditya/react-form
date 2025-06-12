import { useState } from "react"
export const ContactForm=()=>{
    const[userName,setUserName]=useState("")
    const[email,setEmail]=useState("")
    const[message,setMessage]=useState("")
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        const contactData={
            userName,
            email,
            message,
        };
        console.log(contactData)
     
    }

    return (
      <>
        <div>
          <form onSubmit={handleFormSubmit}> 
            <h1>This is a contact Form</h1>
            <br />
            <label htmlFor="username">username</label>
            <input type="text" name="username" autoComplete="off" value={userName} onChange={(event)=>setUserName(event.target.value)} />
            <br />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" autoComplete="off" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <br />
            <textarea name="message" type="text" autoComplete="off" rows="6" value={message} onChange={(event)=>setMessage(event.target.value)}/>
            <button type="submit">submit</button>
          </form>
        </div>
      </>
    );
}