import React from 'react'
import Cards from './Cards'

function Hero() {
  return (
    <div className='hero'>
        <div className='efectpart'>
              <div className='blue'></div>
              <div className='pink'></div>  
        </div>
        <div className='textpart'>
             <h1>Start and Build Your Crypto Portfolio Here</h1>
             <p>Only at CryptoCap, you can build a good portfolio and learn <br/> best practices about cryptocurrency.</p>
             <button>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
