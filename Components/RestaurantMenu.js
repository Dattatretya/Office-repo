import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {

  const [menu, setMenu] =  useState ([])

  const param = useParams()
  console.log(param.resId)

  useEffect(()=>{
    fetchMenu()
  },[])

  const fetchMenu = async () => {
    const data = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4187551&lng=77.0493876&restaurantId=${param.resId}`)
    const json = await data.json()
    console.log(json)
    console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards)
    setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards)
  }

  if (menu.length===0){
    return <Shimmer/>
  }

  return (
    <div className='menu-container'>
      {menu.map((item)=>(
        <div key={item.card.info.id} className='menu-list'>
          <img className='menu-img' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ item.card.info.imageId}/>
        <p>{item.card.info.name}</p>
        <p> Price: {item.card.info.price/100}</p>
        </div>
      ))}
    </div>
  )
}

export default RestaurantMenu