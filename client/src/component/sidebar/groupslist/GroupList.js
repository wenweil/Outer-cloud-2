import React from 'react'
import { Group } from './Group'

export const GroupList = ({groups}) => {
  return (
    <div className='Sidebar_Lists'>
        {
            groups.map((group,i)=>{
                return <Group name={group.nickname} img={group.picture}/>
            })
        }
    </div>
  )
}
