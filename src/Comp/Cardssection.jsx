import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';

function Cardssection() {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd', // Change currency as needed
          order: 'market_cap_desc',
          per_page: 4, // Number of cryptocurrencies to fetch (top 4)
          page: 1,
          sparkline: false,
        },
      })
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='cardsection'>
      <h1>Market Trend</h1>
      <div className='maginta'></div>
      <div className='cardo'>
        {coin.length > 0 && coin.slice(0, 4).map((crypto, index) => (
          <Cards
            key={crypto.id}
            name={crypto.id}
            image={crypto.image}
            value={crypto.fully_diluted_valuation}
            id={index === 3 ? 'no' : ''}
          />
        ))}
      </div>
    </div>
  );
}

export default Cardssection;
