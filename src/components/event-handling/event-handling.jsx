export default function  Event_Handling(){
    return <form>
        <label htmlFor="username">Username</label>
        <br />
        <input  id="Username" onClick={
            (e)=>{
                console.log("clicked")
                console.log(e)
            }
        }
        onKeyDown={
            (e)=>{
                console.log("key pressed")
                console.log(e.key)
            }
        }
        />
        <br />
        <label htmlFor="Password">Password</label>
        <br />
        <input type="password" id=" text" />
        <br />
        <button>Submit</button>
    </form>
}