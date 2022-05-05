import React, {useState} from 'react'
import './Header.css'
import starImg from  '../../assets/star.svg'
import menu from '../../assets/Menu-icon.svg'
import close from '../../assets/Close-icon.svg'
import { NavLink } from 'react-router-dom'
const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggelMenu = e => {
    setShowMenu(prev => !prev)
  }
  return (
    <div className='header'>
        <div >
           <img src={starImg}/>
        </div>
        <div className='line'>

        </div>
        <div className={`navigation ${showMenu ? 'active' : ''}`}>
          <div className='blur'></div>
            <ul>
                <NavLink exact to="/" activeClassName='active'> 00 HOME</NavLink>
                <NavLink exact to="/destination" activeClassName='active'> 01 DESTINATION</NavLink>
                <NavLink exact to="/crew" activeClassName='active'> 02 CREW</NavLink>

                <NavLink exact to="/technology" activeClassName='active'> 03 TECHNOLOGY</NavLink>
              
            </ul>
        </div>
        <img src={showMenu ? close : menu} className="menu" onClick={toggelMenu}/>
    </div>
  )
}

export default Header