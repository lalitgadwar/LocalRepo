import axios from "axios";
import { useEffect, useRef, useState} from "react";

const PutEx1=()=>{
    const [res,setRes]=useState({});
    const refId=useRef(null);
    const refSal=useRef(null);
    const refName=useRef(null);
    
    const putData=()=>{
        putEx();
    }
    const putEx= async()=>{
      try {
        const res1=await axios.put("http://localhost:1123/editu",{ "empno":refId.current.value, "ename":refName.current.value ,"esal":refSal.current.value});
        const {data}=res1;
        console.log(data);
        setRes(data);
    } catch (error) {
        console.log(error);
    }
    
        
    
    }
    return(
        <>
        <input type="number" ref={refId} placeholder="enter ID"/><br /><br />
        <input type="text" ref={refName} placeholder="enter name" /><br /><br />
      <input type="number" ref={refSal} placeholder="enter Salary"/> <br /><br /> 
        <button onClick={putData} className="btn btn-primary btn-block">Update<span class="spinner-border spinner-border-sm"></span></button><br />
        <p>{JSON.stringify(res)}</p>
        </>
    )
}
export default PutEx1;
