import { useState } from "react"
import React from "react"
export default function States(){
    //console.log(useState("Hello i am a state component"))

    //this below way of writing code is called array destructuring 
    //usestate()--> it returns an array with 2 value in it and we r holding those values here in array.
    //const [state_variable,state_function]=useState("empty as we r working with strings")
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    let isDisabled = "";
    if(username.length < 5 || password.length < 5 ){
        isDisabled = true
    }
    else{
        isDisabled = false
    }
    return(
       <React.Fragment>
            <form >
                <div>
                    <label htmlFor="username">Username For State</label>
                    <br />
                    <input type="text" 
                    id="username" 
                    value={username}
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }}
                    />
                    <br />
                    <label htmlFor="password">Password For State</label>
                    <br />
                    <input type="password"
                     id="password" 
                     value={password}
                     onChange={(e)=>{
                        setPassword(e.target.value)
                     }}
                     />
                    <br />
                    <button disabled = {isDisabled}>Submit</button>
                </div>
                <div>
                   <h4>username = {username}</h4>
                </div>
            </form>
       </React.Fragment>
    )
}