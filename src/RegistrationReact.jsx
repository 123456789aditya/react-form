import { useState } from "react"


export const RegistrationReact=()=>{
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    });

    const handleInputChange=(event)=>{
        const{name,value}=event.target;
        setUser((previous)=>({ ...previous,[name]:value}))
        

  
    };

    const Shivi=(event)=>{
        event.preventDefault()
        const Aditya={
            firstName,
            lastName,
            email,
            password,
        };

    };
    return(
        <>
        <form onSubmit={Shivi}>
            <div>
                <h1>Registration form</h1>
                <p>please fill all the required data</p>
                <label htmlFor="firstName">
                    <p>firstName:</p>
                </label>
                <input type="text" name="firstName" placeholder="enter ur firstname" value={user.firstName} onChange={handleInputChange}/>
                <label htmlFor="lastName">
                    <p>lastName:</p>
                </label>
                <input name="lastName" type="text" placeholder="enter ur lastname" value={user.lastName} onChange={handleInputChange}/>
                <label htmlFor="email">
                    <p>Email:</p>
                </label>
                <input name="email" type="email" placeholder="enter your email" value={user.email} onChange={handleInputChange}/>
                <label htmlFor="password">
                    <p>Password:</p>
                </label>
                <input name="password" type="text" placeholder="enter ur password" value={user.password} onChange={handleInputChange}/>

                <div>
                    <button type="submit">CLICK</button>
                </div>



            </div>
        </form>
        </>
    )
}