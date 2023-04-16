import { RES_IMG_URL } from "../utils/constant";

export const RestaurantCard = (props) => {
    const {restaurantData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime, locality} = restaurantData?.data
    return ( 
    <div className='card-view' style={{width:"250px",padding:"5px 10px"}}>

        <img src={RES_IMG_URL + cloudinaryImageId} alt='restaurant image' style={{padding:"10px 15px", width:"90%"}}/>

        <h3>{name}</h3>

        <p>{cuisines.join(', ')}</p>

        <div className='rating_time_cost' style={{display:"flex", justifyContent:"flex-start", gap:"25px", alignItems:"flex-end"}}>
        <h4 style={{backgroundColor:"#48C479",color:"#fff", display:"inline-block",  padding:"1px 3px"}}>{avgRating} 🌟</h4>

        <h5>{deliveryTime}Mints</h5>

        <h5>₹{costForTwo / 100} FOR TWO</h5>
        </div> 
        <h4>{locality}</h4>
    </div>
    )
}
export default RestaurantCard