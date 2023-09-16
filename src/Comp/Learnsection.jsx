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
          <Secendcard text='Manage  Portfolio' pg='Buy and sell popular digital currencies, keep track of them in the one place'/>
          <Secendcard text='Protected Securely' pg='All cash balances are covered by FDIC insurance'/>
          <Secendcard text='Cryptocurrency Variety' pg='Supports a variety of the most popular digital currencies'/>
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
