import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [active,setactive] = useState(false);
  const change = () => {
    setactive(!active)
  };
  return (
    <div>
    <nav>
       <h1>Crypto<span>Cap</span></h1>
       <ul className={`partL ${active ? 'open' : ''}`}>
          <li id='active'>Home</li >
          <li>Businesses</li >
          <li>Trade</li >
          <li>Market</li >
          <li>Learn</li >
       </ul>
        <div>
          <button className='new' onClick={change}> {active ? <FaTimes/> : <FaBars/>} </button>
          <button className='login'>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

