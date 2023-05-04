import { RES_IMG_URL } from "../utils/constant";

export const RestaurantCard = (props) => {
    const {restaurantData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime, locality} = restaurantData?.data

    return ( 
        <div
        className="p-5 w-[395px] flex flex-wrap cursor-pointer">
        <div className="rounded overflow-hidden shadow-lg dark:shadow-gray-800">
          <img
            className="w-full"
            src={RES_IMG_URL  + cloudinaryImageId }
            alt="Restaurant Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              {cuisines.join(', ')}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span
              className="inline-block bg-[#48c479] rounded-full px-3 py-1 text-sm font-semibold text-[#fff] mr-2 mb-2">
              {avgRating} 🌟
            </span>
            <span
              className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
              {costForTwo / 100} For Two
            </span>
            <span
              className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
              {deliveryTime} Mins
            </span>
            <p className="pt-[20] font-bold text-gray-700 dark:text-gray-300 text-base">
              {locality}
            </p>
          </div>
        </div>
      </div>
           
    )
}
export default RestaurantCard