import React, {useEffect, useState} from 'react'
import './Technology.css'
import Type from './Type'
const Technology = () => {

    const [data, setData] = useState([])
    const fetchData = async() => {
        const response = await fetch('/Data.json')
        const data = await response.json()
        setData(data.technology)
    }
    useEffect(() => {
        fetchData()
    }, [])
    
  return (
    <div className='tech'>
        
        <div className='tech-container'>
        <h1><span>03</span> SPACE LAUNCH 101</h1>
            {data?.length>0 && (<Type types={data}/>)}
        </div>
    </div>
  )
}

export default Technology