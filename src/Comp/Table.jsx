// Table.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Table() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 15,
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
      <p>Cryptocurrency Coins</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th id='hd'>Price</th>
            <th id='hdmi'>Change</th>
            <th id='hd'>Symbol</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={index}>
              <td>{crypto.market_cap_rank}</td>
              <td>{crypto.name}</td>
              <td>
                <img id='hi' alt='coin' src={crypto.image} />
              </td>
              <td id='hd'>{crypto.current_price.toFixed(2)}</td>
              <td id='hdmi' className={`red ${crypto.price_change_24h > 0 ? 'green' : ''}`}>
                {crypto.price_change_24h.toFixed(2)}
              </td>
              <td id='hd'>{crypto.symbol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
