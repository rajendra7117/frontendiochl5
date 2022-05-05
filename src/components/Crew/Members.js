import React, {useState} from 'react'
import './Members.css'
const Members = ({members}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const changeMember = (ind, e) => {
      setCurrentIndex(ind)
    }
    let img = (members[currentIndex].images.webp.substring(1, members[currentIndex].images.webp.length))
  return (
    <div className='members-container'>
        
        <div className='sec-1'>
       
          <div className='info'>
           <h3>{members[currentIndex].role}</h3>
           <h1>{members[currentIndex].name}</h1>
           <p>{members[currentIndex].bio}</p>
          </div>
          <ul className='dots'>
              {members?.map((m, index) => <li key={m.name} onClick={changeMember.bind(this, index)} className={`${currentIndex===index && 'active'}`}></li>)}
          </ul>
        </div>
        <div className='sec-2'>
            <img src={img} className='person'/>
            <div className='h-line'></div>
        </div>
    </div>
  )
}

export default Members