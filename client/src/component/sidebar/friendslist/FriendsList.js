import React from 'react'
import { Friend } from './Friend'

export const FriendsList = ({friends}) => {
  return (
    <div className='Sidebar_Lists'>
        {friends.map( (friend,i) => {
            return <Friend name={friend.nickname} img={friend.picture} key={i}/>
        })}
    </div>
  )
}
