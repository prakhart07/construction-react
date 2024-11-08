import { useLocation, useNavigate } from "react-router-dom";
import Admin from "./admin";
import Header from "./header";


function AdminPanel(){

    const Navigate=useNavigate();
    const {state}=useLocation();
    const isLogin=localStorage.getItem("isLogin");

    return(
        <>
        {isLogin=="True" ?
        <>
        <Header/>
        <Admin/>
        </>:Navigate('/')}
        </>
    )
}
export default AdminPanel;