import { useLocation, useNavigate } from "react-router-dom";
import Admin from "./admin";
import Header from "./header";


function AdminPanel(){

    const Navigate=useNavigate();
    const {state}=useLocation();

    return(
        <>
        {state?.isLogin==true ?
        <>
        <Header/>
        <Admin/>
        </>:Navigate('/')}
        </>
    )
}
export default AdminPanel;