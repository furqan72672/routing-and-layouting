import { Outlet } from "react-router-dom";

export function ProtectedLayout(){
    return(
        <>
            <h1>Layout:ProtectedLayout</h1>
            {/* outlet is defined to pass the child route components and render through this layout  */}
            <Outlet/>
        </>
    )
}