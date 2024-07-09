import UserProfile from "./components/basic_jsx/userProfile";
import React from "react";
import Event_Handling from "./components/event-handling/event-handling";
import States from "./components/States/Basic_States";
import StateArray from "./components/States/States_arrays";

export default function App (){

    // eslint-disable-next-line no-unused-vars
     window.addEventListener('resize' , (e)=>{
        console.log(window.innerHeight, window.innerWidth);
    });
    window.addEventListener("click" , (e) =>{
        console.log(e.clientX, e.clientY);
    })

    const callme = ()=>{
      console.log("hiiiii");
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
            <States/>

        </React.Fragment>
    );
}
