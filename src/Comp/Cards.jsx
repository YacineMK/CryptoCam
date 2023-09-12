import seemore from './Images/see-more-ic.svg';
//import bit from './Images/bitcoin-ic 2.svg';
import gh from './Images/chart-state 1.svg';


function Cards(props) {

  return (
    <div className='card'>
      <div className='cont'>
        <div className='head'>
          <img alt='coin' src={props.image}/>
          <h3>{props.name}</h3>
          <img alt='flich' src={seemore}/>
        </div>
        <div className='stats'>
          <h3>${Math.floor(props.value / 10)}</h3>
          <img alt='graph' src={gh}/>
        </div>
      </div>
    </div>
  )
}

export default Cards
