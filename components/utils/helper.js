export function filterData (searchedRestaurant, allRestaurant){
    searchedRestaurant = searchedRestaurant.toLowerCase()
    return allRestaurant.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchedRestaurant))
}