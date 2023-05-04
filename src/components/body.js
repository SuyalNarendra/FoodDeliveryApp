import { useState } from "react";
import { restList } from "../config";
import Card from "./restCard";


const filterRest = (restList,nam)=> {
    const filtdata = restList.filter((rst)=>
    {
        
         return   rst.data.data.name.toLowerCase().includes(nam.toLowerCase());
    }
 );
    return filtdata;
}

const Body = ()=>{
    const [name,setName] = useState("");
    const [rest,setRest] = useState(restList);
    return (
    <>
    <div className="searchBox">
        <input
        type="text"
        value={name}
        placeholder="Search"
        onChange={(e)=>{
            setName(e.target.value);
        }}
        />
       <button
       onClick={()=>{
        const data = filterRest(restList,name);       
        setRest(data);
       }}
       >search</button>
    </div>
    <div className="restList" style={{padding:"30px", margin:"30px" ,margintop:"10px"}}> 
        {
            rest.map(rst =>{
          return <Card {...rst}/>
            })
            }
         </div>
         </>
         )
}

export default Body;