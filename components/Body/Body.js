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
      return <div><h1>🔴 Seems you are offline</h1></div>
    }
    return ( 
    <>
    <div className='searchBar'>
         <input className='searchInput'
          type='text' placeholder='Search Restaurant' value={searchedRestaurant} onChange={(e) => {setSearchedRestaurants(e.target.value)}} />
          <button onClick={() => {
            // need to filter the data 
            const data = filterData(searchedRestaurant, allRestaurant)
            // update the state 
            setFilteredRestaurants(data)
          }}>Search</button>
    </div>
    <div className='countRestaurant'>
      <h1>{filteredRestaurant.length} Restarurant </h1>
       </div>
    <div className='restaurant__container'>
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