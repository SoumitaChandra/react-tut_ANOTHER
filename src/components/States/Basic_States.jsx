import { useState } from "react"
import React from "react"
export default function States(){
    console.log(useState("Hello i am a state component"))

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    return(
       <React.Fragment>
            <form >
                <div>
                    <label htmlFor="username">Username For State</label>
                    <br />
                    <input type="text" 
                    id="username" 
                    value={}
                    />
                    <br />
                    <label htmlFor="password">Password For State</label>
                    <br />
                    <input type="password" id="password" />
                    <br />
                    <button>Submit</button>
                </div>

            </form>
       </React.Fragment>
    )
}