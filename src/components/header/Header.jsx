import React, { useState } from 'react'
import './header.css'
import Links from './Links'

function Header() {
    const [toggle, setToggle] = useState(false)
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className='nav_logo'>Forkan</a>
            <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
                <Links />
                <i className="uil uil-times nav_close" onClick={()=>setToggle(!toggle)}></i>
            </div>
            <div className="nav_toggle" onClick={()=>setToggle(!toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header
