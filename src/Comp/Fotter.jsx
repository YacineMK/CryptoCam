import React from 'react'
import { FaGithub, FaLinkedin,FaDiscord } from 'react-icons/fa';


function Fotter() {
  return (
    <div className='Fotter'>
      <h2>Crypto<span>Cap</span></h2>
      <div className='links'>
      <a href='https://github.com/YacineMK'><FaGithub  className="icon"/></a>
      <a href='https://www.linkedin.com/in/yacine-merrouki-ab9889253/'><FaLinkedin className="icon" /></a>
      <a href='https://discord.com/Saul_14'><FaDiscord className="icon" /> </a>
      </div>
    </div>
  )
}

export default Fotter
