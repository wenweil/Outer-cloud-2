import React from 'react'
import { FriendsList } from './friendslist/FriendsList'
import { GroupList } from './groupslist/GroupList'
import { Profile } from './Profile'

export const Sidebar = ({name, imgURL, friends, groups}) => {
  return (
    <div className='Sidebar'>
        <Profile username={name} imageURL={imgURL}/>
        <p>Friends</p>
        <FriendsList friends={friends} />
        <p>Groups</p>
        <GroupList groups={groups} />
    </div>
  )
}
