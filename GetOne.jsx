import axios from "axios"
import { useState,useRef } from "react"
const GetEX1=()=>{
    const refId=useRef(null);
    const [element , setElement]=useState({});
    const fetch_data=()=>{
        get_data();
    }
   const get_data= async()=>{
   try {
   
        const res= await axios.get(`http://localhost:1123/getone/${refId.current.value}`);
       const {data}=res;
       setElement(data);
    
   
    
} catch (error) {
    console.log(error)
}}
return(
    <>
    <input type="text" ref={refId} placeholder="EnterId"/><br /><br />
    <button onClick={fetch_data}>Get Record</button>
    <div className="table table-bordered table-striped table-success table-hover">
<table>
    <thead>
    <tr>
        <td>Emp_id</td>
        <td>Name</td>
        <td>Salary</td>
        <td>TA</td>
        <td>DA</td>
        <td>HRA</td>
        <td>PF</td>
        <td>Gross Salary</td>
        <td>Net Salary</td>

    </tr>
    </thead>
   <tbody>
       
               
                <tr>
                    <td>{element.empno}</td>
                    <td>{element.ename}</td>
                    <td>{element.esal}</td>
                    <td>{element.ta}</td>
                    <td>{element.da}</td>
                    <td>{element.hra}</td>
                    <td>{element.pf}</td>
                    <td>{element.gsal}</td>
                    <td>{element.netsal}</td>
                </tr>
              
       
         </tbody> 
            </table>
            </div>
    </>
)
}
export default GetEX1;
