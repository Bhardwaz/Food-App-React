import {Children, useEffect, useState} from 'react'
import RestaurantCard from './RestaurantCard'
import ShimmirUI from '../utils/ShimmirUI'
import { filterData } from '../utils/helper'
import { Link } from 'react-router-dom'
import useOnline from '../utils/isOnline'

const Body = () => {     
     const noRestaurant = () => {
       return(
        <>
         <ShimmirUI/>
        <div className='noRestaurant'>
         <p>Sorry, no results found!😞 <br /> 
         Please try a different search term.
         </p>
        </div>
        </>
       )
     }

    const [allRestaurant, setAllRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurants] = useState([])
    const [searchedRestaurant, setSearchedRestaurants] = useState('')

    async function gettingAllRestaurants(){
     const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6195574&lng=77.0549901&page_type=DESKTOP_WEB_LISTING')
     const json = await data?.json()
     setAllRestaurants(json.data.cards[2].data.data.cards)
     setFilteredRestaurants(json.data.cards[2].data.data.cards)
    }
    
    useEffect(() => {
        gettingAllRestaurants()
    },[])

    const isOnline = useOnline()
    if(!isOnline){
      return <div className='h-[100vh] w-[100vw] flex justify-center items-center text-3xl'><h1>🔴 Seems you are offline</h1></div>
    }
    return ( 
    <>
    <div className='w-full'>
         <input className='w-8/12 mx-[8.5%] mt-10 p-2 rounded-md text-lg border outline-[#FFA700]'
          type='text' placeholder='Search Restaurant' value={searchedRestaurant} onChange={(e) => {setSearchedRestaurants(e.target.value)}} />
          <button className="rounded-md bg-[#FFA700] border px-3.5 py-1.5 text-base font-semibold leading-7"
          onClick={() => {
            // need to filter the data 
            const data = filterData(searchedRestaurant, allRestaurant)
            // update the state 
            setFilteredRestaurants(data)
          }}>Search</button>
    </div>
    <div>
      <h1 className='w-8/12 mx-[8.5%] pt-5 text-3xl'>{filteredRestaurant.length} Restarurant </h1>
       </div>
    <div className='w-9/12 mx-[8.5%] mt-4 flex flex-wrap'>
      {
        (
        filteredRestaurant.length  === 0 ? noRestaurant() :
        filteredRestaurant.map(restaurant => <Link to={"/restaurant/"+ restaurant.data.id} key={restaurant.data.id}><RestaurantCard restaurantData={restaurant} /></Link>)
        )
      }
    </div>
    </>
)
}
export default Body