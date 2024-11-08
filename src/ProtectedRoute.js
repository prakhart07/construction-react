import { Outlet,Navigate } from "react-router-dom";

function ProtectedRoutes(){
    const isLogin=localStorage.getItem("isLogin");
    return(
        isLogin=="True"?<Outlet/>:<Navigate to={'/login'}/>
    )
}

export default ProtectedRoutes;