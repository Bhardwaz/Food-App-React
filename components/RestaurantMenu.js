import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RES_IMG_URL } from "./utils/constant"

const RestaurantMenu = () => {
    const {id} = useParams()
    
    const [menu, setMenu] = useState({}) 
    console.log(menu);
    useEffect(() => {
     getRestaurantInfo()
    }, [])
    
    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6195574&lng=77.0549901&restaurantId=216641&submitAction=ENTER")
        const json = await data?.json()  
        setMenu(json?.data?.cards[0]?.card?.card.info)     
}
    return(
        <div className="restaurantMenu-Container">
         <h1>{menu?.name}</h1>
         <img src={RES_IMG_URL + menu?.cloudinaryImageId} alt="item pic"/>
         <img src={menu.logo} alt="item pic"/>
         <h1>{menu?.locality}</h1>
         <h1>{menu?.areaName}</h1>
         {menu.isOpen ? <h1>Opened</h1> : <h1>Closed</h1>}
        </div>
    )
}
export default RestaurantMenu