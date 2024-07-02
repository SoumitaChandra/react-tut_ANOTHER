import UserProfile from "./components/basic_jsx/userProfile";
import React from "react";

export default function App (){

    const callme = ()=>{
      console.log("hello");
    }
    return(
        <React.Fragment>
            <h1>React</h1>

            <UserProfile 
            age={25}
            company="ABc"
            callme = {callme}
             />
        </React.Fragment>
    );
}