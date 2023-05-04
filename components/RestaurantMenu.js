import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RES_IMG_URL } from "./utils/constant"
import useRestaurant from "./utils/useRestaurants"
import ShimmirUI from "./utils/ShimmirUI"

const RestaurantHeader = () => {
    const {id} = useParams()
    
    const menu = useRestaurant(id)

  if(menu?.length === 0) return
return(
    <div className="w-[100vw] mt-[30px]">
        <div className="w-[50vw] my-0 mx-[auto]">
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[7px]">

                <p className="text-sm font-bold mb-5">{menu?.name} </p>

                <p className="text-xs">{menu?.cuisines?.join(', ')}</p>

                <p className="text-xs">{menu?.areaName}, {menu?.sla?.lastMileTravelString}</p>

                <p className="text-sm text-[#7E808C] flex items-end">
                <img className="w-[18px] h-[18px] rounded-lg mb-[3px]"
                src={RES_IMG_URL + menu?.feeDetails?.icon} />{menu?.feeDetails?.message}</p>

            </div>

            <div className="border-2 inline-block rounded-lg p-2 shadow-black">

                 <p className="text-sm text-[#3d9b6d] font-bold">
                 🌟 {menu?.avgRatingString}
                 </p>

                 <hr/>

                 <p className="text-xs">
                  {menu?.totalRatingsString}
                 </p>
            </div>

        </div>
        <hr className="border-b-2"/>

        <p className="font-bolder text-lg">
        <span className="mb-[20px]">{menu?.sla?.deliveryTime} MINS</span>
        <span>{menu?.costForTwoMessage}</span>      
        </p> 
      
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
      <div>
        <div className="w-[50vw] my-0 mx-[auto]">
          {console.log(restaurant)}
            <div>
            <h3 className="pt-5 text-lg">All Items</h3>
            <div>
            </div>
            </div>

          <div className="category-items">
            <ul>
             {
              Object.values(restaurant).map((item) => {
               return <li key={item?.id} style={{listStyleType:"none",}}>
                      <div className="flex justify-between items-end mt-[50px]">

                      <div>
                        <div>
                            {item?.isVeg ? <div className="w-[20px] h-[20px] rounded-3xl bg-[#48C749]"></div> :
                             <div className="w-[20px] h-[20px] rounded-3xl bg-[red]"></div>
                            }

                            {item?.isBestSeller ? <div className="bg-[#EE9C00]">🌟 Bestseller</div> : " "}
                        </div>

                         <h3 className="text-[#3e4152] text-lg">{item?.name}</h3>

                         <span>₹ {item?.price / 100}</span>

                         <p className="text-sm text-[#282c3f73]">
                           {item?.description}
                         </p>

                      </div>
                      <div className="w-[200px]">
                           <img src={RES_IMG_URL + item?.cloudinaryImageId} />
                      </div>   
                      </div> 

                      <hr className="border-2 mt-3"/> 
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