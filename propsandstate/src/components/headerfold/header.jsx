import React from 'react'
import grid from './grid.png'
import mypic from './mypic.jpg'

function Header() {
  return (
    <div className='headwrapper'>
      
        <p>Gmail</p>
        <p>Images</p>
        <img src={grid} alt="apps" className='appspic'/>
        <img src={mypic} alt="image of me" className='mypic'/>
      
    </div>
  )
}

export default Header