import axios from "axios";
import { useRef, useState } from "react";
const PostEx1=()=>{
    const [res, setRes]=useState({});
const ref1=useRef(null);
const ref2=useRef(null);
const post_data=()=>{
    postEx();
}
const postEx=async ()=>{
    const res=await axios.post("http://localhost:1123/empsave",{"ename":ref1.current.value, "esal":ref2.current.value});
    const {data}=res;
    setRes(data);
}
return(
    <>
    <div>
    <mark><i>Your ID will be<kbd>Auto Generated</kbd> , check Below after registration </i></mark><br /><br />
    <input type="text" ref={ref1} placeholder="Enter full name"></input> <br></br> <br></br>
    <input type="number" ref={ref2} placeholder="Enter your Salary"></input> <br /><br />
    <button onClick={post_data}>Post</button><br />
    <div className="alert alert-success"><p>{JSON.stringify(res)}</p></div>

    
    </div>
    </>
)
}
export default PostEx1;
