import { restList } from "../config";
import Card from "./restCard";

const Body = ()=>{
    return <div className="body"> 
        {
            restList.map(rst =>{
          return <Card {...rst}/>
            })
            }
         </div>
}

export default Body;