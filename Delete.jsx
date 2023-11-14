import axios from "axios";
import { useEffect, useState,useRef } from "react";
const DeleteEx=()=>{
const refId=useRef(null);
const [res,setRes]=useState("");
const delete_data=()=>{
    delete_record();
}
const warning=()=>{
    window.alert(`Are you sure you want to delete data....! if yes hit twice <kbd> delete </kbd>button `);
}
const delete_record=async()=>{
   let otput= await axios.delete(`http://localhost:1123/delete/${refId.current.value}`);
   console.log(otput)
   const {data}=otput;
   setRes(data);
}
return(
    <>
    <input type="text" ref={refId}  placeholder="Enter your Id"/><br /><br />
    <button onClick={delete_data} className="btn btn-danger "  data-bs-dismiss="toast">Delete</button>
    <div class="toast-body">
    Are you sure?You Want to Delete this Record!
  </div>
    <div className="alert alert-link "><h3>{res}</h3></div>
    </>
)
}
export default DeleteEx;
