import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [menu, setMenu] = useState(null)

  useEffect(() => {
    getRestaurantInfo()
   }, [])

   async function getRestaurantInfo(){
       const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6195574&lng=77.0549901&restaurantId=${id}&submitAction=ENTER`)
       const json = await data?.json()  
       setMenu(json?.data?.cards[0]?.card?.card?.info)        
}
    return menu
};
export default useRestaurant    