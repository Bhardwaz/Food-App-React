import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RES_IMG_URL } from "./utils/constant"
import useRestaurant from "./utils/useRestaurants"
import ShimmirUI from "./utils/ShimmirUI"
import "./RestaurantMenu.css"

const RestaurantHeader = () => {
    const {id} = useParams()
    
    const menu = useRestaurant(id)

  if(menu?.length === 0) return
return(
    <div className="restaurantMenu-Container">
        <div className="restaurantMenu">
        <div className="address_Rating">
            <div className="address">

                <p style={{fontSize:"20px", fontWeight:"700", marginBottom:"10px"}}>{menu?.name} </p>

                <p style={{fontSize:"13px"}}>{menu?.cuisines?.join(', ')}</p>

                <p style={{fontSize:"13px"}}>{menu?.areaName}, {menu?.sla?.lastMileTravelString}</p>

                <p style={{fontSize:"14px", color:"#7E808C", display:"flex", alignItems:"flex-end"}}>
                <img style={{width:"18px",height:"18px", borderRadius:"20px", margin:"0px 8px 0px 0px"}} src={RES_IMG_URL + menu?.feeDetails?.icon} />{menu?.feeDetails?.message}</p>

            </div>

            <div className="rating" style={{border:"1px solid rgba(0,0,0,.2)", display:"inline-block", borderRadius:"10px", padding:"0px 5px",boxShadow:'0 1px 1px rgb(0 0 0 / 0.1)'}}>

                 <p style={{fontSize:"14px", color:"#3d9b6d", fontWeight:"700"}} className="rating-container">
                 🌟 {menu?.avgRatingString}
                 </p>

                 <hr/>

                 <p style={{fontSize:"11px"}}>
                  {menu?.totalRatingsString}
                 </p>
            </div>

        </div>

        <hr className="dashedLine"/>

        <p style={{fontWeight:"1100", fontSize:"15px"}} className="deliveryTimeAndCharges">
        <span style={{margin:"0px 20px 0px 0px"}}>{menu?.sla?.deliveryTime} MINS</span>
        <span>{menu?.costForTwoMessage}</span>      
        </p> 

        <div className="filterVegAndNon" style={{marginTop:"50px"}}>
           <span style={{fontSize:"14px", marginRight:"10px", fontWeight:"700",color:"#3d4152"}}> Veg Only </span>
          <label className="switch">
          <input type="checkbox" id="toggle" />
          <span className="slider"></span>
          </label>
        </div>

        <hr className="simpleLine" />
        
        </div>
        </div>
    )
}

const RestaurantItems = () => {
const {id} = useParams()
const [restaurant, setRestaurant] = useState({})
  
  useEffect(() => {
    restaurantMenu()
  },[])
  async function restaurantMenu(){
    const data = await fetch(`https://www.swiggy.com/dapi/menu/quick?menuId=${id}&categories=true`)
    const json = await data?.json()
    setRestaurant(json?.data?.menu?.items)
}
    return (!restaurant) ? <ShimmirUI /> : (
      <div className="restaurantMenu-Container">
        <div className="menuItems">
          {console.log(restaurant)}
            <div className="menuHead">
            <h3 className="itemName">All Items</h3>
            <div className="downArrow">
            <button style={{cursor:"pointer"}}> See </button>
            </div>
            </div>

          <div className="category-items">
            <ul>
             {
              Object.values(restaurant).map((item) => {
               return <li key={item?.id} style={{listStyleType:"none",}}>
                      <div className="itemCard" style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginTop:"50px"}}>

                      <div className="itemDetails">
                        <div className="tag">
                            {item?.isVeg ? <div className="veg same-style"></div> :
                             <div className="nonVeg same-style"></div>
                            }

                            {item?.isBestSeller ? <div style={{color:"#EE9C00"}}>🌟 Bestseller</div> : " "}
                        </div>

                         <h3 style={{color:'#3e4152', fontSize:"17px"}}>{item?.name}</h3>

                         <span>₹ {item?.price / 100}</span>

                         <p style={{fontSize:"14px", color:"#282c3f73"}} className="description">
                           {item?.description}
                         </p>

                      </div>
                      <div className="itemImage">
                           <img src={RES_IMG_URL + item?.cloudinaryImageId} />
                      </div>   
                      </div> 

                      <hr className="simpleLine" /> 
               </li>
              })
            
             }
             
          </ul>
          </div>
      </div>
      </div>
    )
}

const RestaurantMenu = () => {
  return(
    <>
    <RestaurantHeader />
    <RestaurantItems />
    </>
  )
}

export default RestaurantMenu