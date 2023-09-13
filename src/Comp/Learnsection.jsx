import React from 'react'
import Secendcard from './Secendcard'


function Learnsection() {
  return (
    <div className='learn'>
        <div className='learn-text'>
            <h1>CryptoCap Amazing Faetures</h1>
            <p>Explore sensational features to prepare your best investment in cryptocurrency</p>
        </div>
        <div className='learn-card'>
          <Secendcard />
          <Secendcard />
          <Secendcard />
        </div>
       <div className='learn-explore'>
          <div>
            <h1>New In Cryptocurrency?</h1>
            <p>We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it.</p>
          </div>
          <button className='butn'>Learn & Explore Now</button>
       </div>
    </div>
  )
}

export default Learnsection
