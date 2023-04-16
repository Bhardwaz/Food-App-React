import {Children, useEffect, useState} from 'react'
import RestaurantCard from './RestaurantCard'
import ShimmirUI from '../utils/ShimmirUI'

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

     function filterData (searchedRestaurant, allRestaurant){
     searchedRestaurant = searchedRestaurant.toLowerCase()
     return allRestaurant.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchedRestaurant))
     }

    const [allRestaurant, setAllRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurants] = useState([])
    const [searchedRestaurant, setSearchedRestaurants] = useState('')

    async function gettingAllRestaurants(){
     const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6386438&lng=77.07206&page_type=DESKTOP_WEB_LISTING')
     const json = await data?.json()
     setAllRestaurants(json.data.cards[2].data.data.cards)
     setFilteredRestaurants(json.data.cards[2].data.data.cards)
    }
    useEffect(() => {
        gettingAllRestaurants()
    },[])
    return filteredRestaurant.length === 0 ? <> {noRestaurant()} </> : ( <>
    <div className='searchBar'>
         <input className='searchInput'
          type='text' placeholder='Search Restaurant Near You' value={searchedRestaurant} onChange={(e) => {setSearchedRestaurants(e.target.value)}} />
          <button onClick={() => {
            // need to filter the data 
            const data = filterData(searchedRestaurant, allRestaurant)
            // update the state 
            setFilteredRestaurants(data)
          }}>Search</button>
    </div>
    <div className='restaurant__container'>
      {
        filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.data.key} restaurantData={restaurant}/>)
      }
    </div>
    </>
  )
}
export default Body