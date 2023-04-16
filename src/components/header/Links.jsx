import React from 'react'

function Links() {
    const links = [
        {
            id: 0,
            href: "#home",
            icon: <i className='uil uil-estate nav_icon'></i>,
            text: "Home"
        },
        {
            id: 1,
            href: "#about",
            icon: <i className='uil uil-user nav_icon'></i>,
            text: "About"
        },
        {
            id: 2,
            href: "#skills",
            icon: <i className='uil uil-file-alt nav_icon'></i>,
            text: "Skills"
        },
        {
            id: 3,
            href: "#services",
            icon: <i className='uil uil-briefcase-alt nav_icon'></i>,
            text: "Services"
        },
        {
            id: 4,
            href: "#portfolio",
            icon: <i className='uil uil-scenery nav_icon'></i>,
            text: "Portfolio"
        },
        {
            id: 5,
            href: "#contact",
            icon: <i className='uil uil-message nav_icon'></i>,
            text: "Contact"
        },
    ]
  return (
    <ul className="nav_list grid">

        {
            links.map(link => (
                <li className="nav_item" key={link.id}>
                    <a href={link.href} className='nav_link'>
                        {link.icon}
                        {link.text}
                    </a>
                </li>
            ))
        }
        
    </ul>
  )
}

export default Links
