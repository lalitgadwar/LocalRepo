import {Link, Routes, Route} from "react-router-dom"
import PostEx1 from "./PostEx1";
import GetEx3 from "./GetEx3";
import PutEx1 from "./PutEx1";
import DeleteEx from "./DeleteEx";
import GetEX1 from "./GetEx1";
const Employee=()=>{
return(
    <>
    <h3>Welcome to Employee Management System</h3>
    <Link to="/reg" style={{marginRight:100}}>Register</Link>
    <Link to="/get" style={{marginRight:100}}>Get All Records<span class="badge bg-secondary">New</span></Link>
    <Link to="/update" style={{marginRight:100}}>Update</Link>
    <Link to="/delete" style={{marginRight:100}}>Delete</Link>
    <Link to="/getone">SingleRecord</Link>
    <br /><br />
    <Routes>
        <Route path="/reg" element={<PostEx1></PostEx1>}></Route>
        <Route path="/get" element={<GetEx3></GetEx3>}></Route>
        <Route path="/update" element={<PutEx1></PutEx1>}></Route>
        <Route path="/delete" element={<DeleteEx></DeleteEx>}></Route>
        <Route path="/getone" element={<GetEX1></GetEX1>}></Route>
    </Routes>

    </>
)
}
export default Employee;
