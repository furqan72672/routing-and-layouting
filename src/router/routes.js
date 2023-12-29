import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const authRoutes=[
    {path:'login',element:<Login/>}
]

export const protectedRoutes=[
    {path:'',element:<Home/>}
]