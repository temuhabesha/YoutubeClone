import React from 'react'
import './Navbar.css'
import menuicon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import searchicon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'

const Navbar = ({setsidebar}) => {
  return (
    <nav className='flex-div'>
      <div className="nev-left flex-div">
      <img className='menu-icon'onClick={()=>setsidebar(prev=>prev===false?true:false)} src={menuicon} alt="" />
      <Link to='/'><img className='logo' src={logo} alt="" /></Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
        <input type="text" name="" id="" placeholder='search'/>
        <img src={searchicon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='user-icon' alt="" />
      </div>
    </nav>
  )
}

export default Navbar
