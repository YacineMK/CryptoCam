import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'

function Cardssection() {
  const [crypto,setCrypto] = useState('');
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets',{
      params: {
        vs_currency: 'usd', // Change currency as needed
        order: 'market_cap_desc',
        per_page: 4, // Number of cryptocurrencies to fetch (top 4)
        page: 1,
        sparkline: false,
      },
    }).then(res => {setCrypto(res.data)})
    .catch(err => {console.log(err)})
  } ,[])
  return (
    <div className='cardsection'> 
      <h1>Market Trend</h1>
        <div className='cardo'>
          <Cards name={crypto[0].id} image={crypto[0].image} value={crypto[0].fully_diluted_valuation}/>
          <Cards name={crypto[1].id} image={crypto[1].image} value={crypto[1].fully_diluted_valuation}/>
          <Cards name={crypto[2].id} image={crypto[2].image} value={crypto[2].fully_diluted_valuation}/>
          <Cards name={crypto[3].id} image={crypto[3].image} value={crypto[3].fully_diluted_valuation} id='non'/>
        </div>
    </div>
  )
}

export default Cardssection
