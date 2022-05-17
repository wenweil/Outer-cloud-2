import React from 'react'

export const Friend = ( {name, img}) => {
  return (
    <div className='ListItem'>
        <img className='ListItem_Profile' alt='Friend Profile' src={img}/>
        <p className='ListItem_Name'>{name}</p>
    </div>
  )
}
