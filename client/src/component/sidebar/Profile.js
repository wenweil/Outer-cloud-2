import React from 'react'

export const Profile = ({username, imageURL}) => {
  return (
    <div className='Profile'>
        <img className='Profile_Pic' alt="User Profile" src={imageURL}></img>
        <p className='Profile_Name'>{username}</p>
    </div>
  )
}
