import React, { useState } from 'react'
import './header.css'
import Links from './Links'
import { Link } from 'react-scroll'

function Header() {
    const [toggle, setToggle] = useState(false)
  return (
    <header className="header">
        <nav className="nav container">
            <Link href="/" spy={true} smooth={true} offset={50} duration={300} className='nav_logo'>Forkan</Link>
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
