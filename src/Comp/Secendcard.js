import React from 'react'
import c from './Images/feature-image 1.svg';
function Secendcard(props) {
  return (
    <div className='learncard'>
      <div>
        <img alt='1' src={c}/>
        <h1>{props.text}</h1>
        <p>{props.pg}</p>
        <a href='https://www.youtube.com/watch?v=tgCG-_lvvkA'><p id='active'>See Explained </p></a>
      </div>
    </div>
  )
}

export default Secendcard
