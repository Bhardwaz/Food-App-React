import { RES_IMG_URL } from "../utils/constant";

export const RestaurantCard = (props) => {
    const {restaurantData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime, locality} = restaurantData?.data

    return ( 
    <div className='card-view' style={{width:"250px",padding:"5px 10px"}}>

        <img src={RES_IMG_URL + cloudinaryImageId} alt='restaurant image' style={{padding:"10px 15px", width:"90%"}}/>

        <p style={{fontSize:"17px"}}>{name}</p>

        <p style={{fontSize:"13px", color:"#686b78"}}>{cuisines.join(', ')}</p>

        <div className='rating_time_cost' style={{display:"flex", justifyContent:"flex-start", gap:"25px", alignItems:"flex-end"}}>

        <p style={{backgroundColor:"#48C479",color:"#fff", display:"inline-block",  padding:"1px 3px", fontSize:"12px"}}>{avgRating} 🌟</p>

        <p style={{fontSize:"12px",color:"#535665"}}>{deliveryTime} Mints</p>

        <p style={{fontSize:"12px", color:"#535665"}}>₹{costForTwo / 100} FOR TWO</p>
        </div> 
        <h4>{locality}</h4>
    </div>
    )
}
export default RestaurantCard