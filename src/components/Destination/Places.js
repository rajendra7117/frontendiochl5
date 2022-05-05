import React, {useState} from 'react'
import './Places.css'


const Places = ({places}) => {
  const [place, setPlace] = useState(places[0])
  const [selectedIndex, setSelectedIndex] = useState(0)
  let index= 0
 
  const changePlace = (ind, e) => {
    setPlace(places[ind])
    setSelectedIndex(ind)
  }
   let img = (place.images.png.substring(1, place.images.png.length))
  return (
    <div className='places-container'>
       
      <div className='sec-1'>
        <ul className='selection'>
        {places?.map((place, index) => <li key={place.name} id={index+1} onClick={changePlace.bind(this, index)} className={`${selectedIndex===index && 'active'}`}>{place.name}</li>)}
        </ul>
        <h1>{place.name}</h1>
        <p>{place.description}</p>
       <div className='line'></div>
       <div className='distance'>
         <div>
           <h3>AVG DISTANCE</h3>
          <span> {place.distance}</span>
         </div>
         <div>
           <h3>EST. TRAVEL TIME</h3>
          <span> {place.travel}</span>
         </div>
       </div>
      </div>
      <div className='sec-2'>
     
      <img src={img}/>
      </div>
    </div>
  )
}

export default Places