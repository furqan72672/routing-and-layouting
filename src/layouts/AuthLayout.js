import { Outlet } from "react-router-dom";

export function AuthLayout(){
    return(
        <>
            <h1>Layout:AuthLayout</h1>
            {/* outlet is defined to pass the child route components and render through this layout  */}
            <Outlet/>
        </>
    )
}