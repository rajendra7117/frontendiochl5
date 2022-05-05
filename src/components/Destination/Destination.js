import React, {useEffect, useState} from 'react'
import './Destination.css'
import Places from './Places'
const Destination = () => {
  const [data, setData] = useState([])
  const fetchData = async() => {
    const res = await fetch('/data.json')
    const data = await res.json()
    setData(data.destinations)
  }
  useEffect(() => {
   fetchData()
   
   
  }, [])

  return (
    <div className='destination'>
      <div className='container'>
      <h1><span>01</span> PICK YOUR DESTINATION</h1>
      {data?.length>0 && (<Places places={data}/>)}
      </div>
     
    </div>
  )
}

export default Destination