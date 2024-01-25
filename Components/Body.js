import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const Body = () => {

  const [restaurant, setRestaurant] = useState([])
  const [filtered,setFiltered] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetchData()
  },[])


  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4187551&lng=77.0493876&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }


  if (restaurant.length === 0){
    return (<Shimmer/>)
  }

  const handleSearch = () => {
    
    const filteredList = restaurant.filter((res)=>(
      res.info.name.includes(filtered)
    ))
    setFiltered(filteredList)
  }
    
  return (
    <>
      {/* <div>
      <input 
      onChange={setSearch(e.target.value)} 
      value={search}/>
      <button onClick={handleSearch}>Search</button>
      </div> */}

    <div className='res-container'>
      

      {restaurant.map((res)=>(
        
        <div className='res-card' key={res.info.id}>
          <Link to={'/restaurants/'+ res.info.id}>
        <img className='res-img' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ res.info.cloudinaryImageId}/>  
        <h3>{res.info.name}</h3>
        <h4>Cuisines: {res.info.cuisines.join(", ")}</h4>
        <h4>Avg rating: {res.info.avgRating}</h4>
        </Link>
        </div>
        
      ))}

    </div>
    </>
  )
}

export default Body