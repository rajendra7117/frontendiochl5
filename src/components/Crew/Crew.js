import React, {useEffect, useState} from 'react'
import './Crew.css'
import Members from './Members'
const Crew = () => {
    const [data, setData] = useState([])
    const fetchData = async() => {
        const res = await fetch('/data.json')
        const data = await res.json()
        setData(data.crew)
      }
      useEffect(() => {
       fetchData()
       
       
      }, [])

      console.log(data)
  return (
    <div className='crew'>
      <div className='container'>
      <h1 className='heading'><span>02</span> MEET YOUR CREW MEMBERS</h1>
      {data?.length>0 && <Members  members={data}/>}
      </div>
    </div>
  )
}

export default Crew