import { IMG_CLD_ID } from "../config";

const Card =(restLit) =>{
    return(
        
        <div className="card">
            
            <img src={IMG_CLD_ID + restLit.data.data.cloudinaryImageId}/>
            <h3 style={{margin:"10px"}}>{restLit.data.data.name}</h3>
            <h5 style={{margin:"10px"}}>{restLit.data.data.cuisines.join(",")}</h5>

        </div>
    )
}

export default Card;