import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"

const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json)
        setResInfo(json.data)
    }

    const {name, cuisines, costForTwo, avgRating} = resInfo?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.RestaurantMenu?.info

    // resInfo === null ? (<Shimmer/>):
    return(
        <>
            <div className="menu">
                <h1>{name}</h1>
                <h2>{cuisines.join(' , ')}</h2>
                <h3>{costForTwo}</h3>
                <h6>{avgRating}</h6>
            </div>
        </>
    )
}

export default RestaurantMenu