import React, {useState} from 'react'
import './Type.css'
const Type = ({types}) => {
   console.log(types)
    const [currentIndex, setCurrentIndex] = useState(0)
    const changeTech = (ind, e) => {
        setCurrentIndex(ind)
    }

 let img = types[currentIndex].images.portrait
 img = img.substring(1, img.length)
  return (
    <div className='type-container'>
      
        <div className='type-text'>
            <div className='selectors'>
           {types?.map((type, index) => <span key={type.name} id={index} onClick={changeTech.bind(this, index)} className={`${currentIndex===index && 'active'}`}>{index+1}</span>)}
           </div>
           <div className='type-info'>
                <h3>The Terminology...</h3>
                 <h2>{types[currentIndex].name.toUpperCase()}</h2>
                 <p className='desc'>
                    {types[currentIndex].description}
                 </p>
           </div>
        </div>
        <div className='type-img'>
          <img src={img}/>
        </div>
    </div>
  )
}

export default Type