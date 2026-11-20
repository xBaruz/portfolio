import React from 'react'
import "./Header.css"

const Header = ({maintext, smalltext}) => {
  return (
    <header>
        <h4>{smalltext}</h4>
        <h1>{maintext}</h1>
        <div className="border-line"></div>
    </header>
  )
}

export default Header