import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Table() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd', // Change currency as needed
          order: 'market_cap_desc',
          per_page: 20, // Number of cryptocurrencies to fetch (top 10)
          page: 1,
          sparkline: false,
        },
      })
      .then((resp) => setCryptoData(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='tablesection'>
      <h1>Market Update</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Change</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={index}>
              <td>{crypto.market_cap_rank}</td>
              <td>{crypto.name}</td>
              <td><img id='hi' alt='coin' src={crypto.image}/></td>
              <td>{crypto.current_price.toFixed(2)}</td>
              <td>{crypto.price_change_24h.toFixed(3)}</td>
              <td>{crypto.symbol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
