import { useEffect, useState } from "react";
import { restList } from "../config";
import Card from "./restCard";
import Shimmer from "./shimmer";


const filterRest = (rest,nam)=> {
    const filtdata = rest.filter((rst)=>
    {
        
         return   rst?.data?.data?.name?.toLowerCase().includes(nam.toLowerCase());
    }
 );
    return filtdata;
}

const Body = ()=>{
    const [name,setName] = useState("");
    const [rest,setRest] = useState([]);
    const [finalRest,setFinalRest] =useState("");

    useEffect(()=>{
        getRests();
},[]);

  async function getRests() {
    const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9875082&lng=79.4141214&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING");

    const json =await data.json();
    console.log(json);
    setRest(json?.data?.cards);
    setFinalRest(json?.data?.cards);
  }

    
    return rest.length === 0 ?(
        <Shimmer/>)
        :(
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
        const data = filterRest(finalRest,name);       
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