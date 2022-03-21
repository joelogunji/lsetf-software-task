import React from 'react'
import "./Header.style.css"

function Header() {
  return (
      <div className="Header">
        <div className="LeftHeader">Header</div>
        <div className="RightHeader">
            <div>Home</div>
            <div>Donate</div>
            <div>Visit</div>
            <div>Contact</div>
        </div>
      </div>
  )
}

export default Header