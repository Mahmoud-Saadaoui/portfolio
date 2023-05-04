import React, { useRef, useState } from 'react'
import './scroll.css'
import { Link } from 'react-scroll'
  
function Scroll() {
  const progress = useRef()
  const progressValue = useRef()
  const [opacity, setOpacity] = useState(0)

  let calcScrollValue = () => {
    let pos = document.documentElement.scrollTop
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrollValue = Math.round((pos * 100)/calcHeight)

    if (pos > 200) {
      setOpacity(1)
    } else{
      setOpacity(0)
    }
    progress.current.style.background = `conic-gradient(var(--title-color) ${scrollValue}%, var(--container-color) ${scrollValue}%)`
  }
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  return (
    <div 
      style={{opacity: `${opacity}`}}
      className='scroll' 
      ref={progress}
    >
      <Link 
        to="home" 
        spy={true} 
        smooth={true} 
        offset={-10} 
        duration={500} 
        className="scroll_arrow"
        ref={progressValue}
      >
        <i className='bx bx-up-arrow-alt scroll-to-top'></i>
      </Link>
    </div>
  )
}

export default Scroll
