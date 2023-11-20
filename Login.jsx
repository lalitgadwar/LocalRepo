import { useRef } from "react";
import {useNavigate,Outlet} from "react-router-dom";
const Login=()=>{
    const ref1= useRef(null);
    const ref2=useRef(null);
    const  navigate=useNavigate();
    const login=()=>{
        ref1.current.value=="admin"&&ref2.current.value=="admin@123"?navigate("/dashboard"):navigate("/error");
    }
    return(
        <>
        <input type="text" ref={ref1} placeholder="enter User Name"></input>
        <br /><br />
        <input type="password" ref={ref2}  placeholder="enter Password"/> <br /><br />
        <button onClick={login}>Login</button>
        <Outlet></Outlet>
        </>
    )
}
export default Login;
