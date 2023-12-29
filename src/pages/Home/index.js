import { useNavigate } from "react-router-dom"

export function Home(){
    const navigate=useNavigate()
    return(
        <div>
            <h3>Route:Home</h3>
            <button onClick={()=>{navigate('/auth/login')}}>Goto Login</button>
        </div>
    )
}