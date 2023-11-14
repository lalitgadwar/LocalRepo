import { useState, useEffect } from "react";
import axios from "axios";
const GetEx3=()=>{
    const [arr, setArr]=useState([]);
    const get_data= async ()=>{
       const res= await axios.get("http://localhost:1123/viewAll");
       const{data}=res;
       setArr(data);
    }
    useEffect(()=>{
        get_data();
    },[]);
    return(
        <>
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
        {arr.map((element,index)=>{
            return(
            
               
                <tr key={index}>
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
              
        )})}
         </tbody> 
            </table>
            </div>
        </>
    )
    
}
export default GetEx3;
