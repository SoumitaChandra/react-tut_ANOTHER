import UserProfile from "./components/basic_jsx/userProfile";
import React from "react";
import Event_Handling from "./components/event-handling/event-handling";

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

            <Event_Handling/>

        </React.Fragment>
    );
}