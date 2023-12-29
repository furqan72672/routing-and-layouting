import { useNavigate } from "react-router-dom"
export function Login(){
    const navigate=useNavigate()
    return(
        <div>
            <h3>Route:Login</h3>
            <button onClick={()=>{navigate('/')}}>Goto Home</button>
        </div>
    )
}