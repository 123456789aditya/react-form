import { useState } from "react"


export const Registration=()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleInputChange=(event)=>{
        const{name,value}=event.target

        switch(name){
            case "firstName":
                setFirstName(value);
                break;

            case "lastName":
                setLastName(value);
                break;

            case "email":
                setEmail(value);
                break

            case "password":
                setPassword(value);
                break;         
        }
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
                <input type="text" name="firstName" placeholder="enter ur firstname" value={firstName} onChange={handleInputChange}/>
                <label htmlFor="lastName">
                    <p>lastName:</p>
                </label>
                <input name="lastName" type="text" placeholder="enter ur lastname" value={lastName} onChange={handleInputChange}/>
                <label htmlFor="email">
                    <p>Email:</p>
                </label>
                <input name="email" type="email" placeholder="enter your email" value={email} onChange={handleInputChange}/>
                <label htmlFor="password">
                    <p>Password:</p>
                </label>
                <input name="password" type="text" placeholder="enter ur password" value={password} onChange={handleInputChange}/>

                <div>
                    <button type="submit">CLICK</button>
                </div>



            </div>
        </form>
        </>
    )
}