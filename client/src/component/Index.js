import React from 'react'
import { Sidebar } from './sidebar/Sidebar'

export const Index = () => {

  //mock data todo: to be removed
  const usertmp = {
    "nickname":"lww371521892",
    "name":"lww371521892@hotmail.com",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",
    "updated_at":"2022-05-17T21:24:14.268Z",
    "email":"lww371521892@hotmail.com",
    "email_verified":false,
    "sub":"auth0|627ed191cd06b800691946f3"
  }

  const frndlst = [
    {"nickname":"1",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"2",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"3",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"4",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"1",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"2",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"3",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"4",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"1",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"2",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"3",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"4",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"1",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"2",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"3",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
    {"nickname":"4",
    "picture":"https://s.gravatar.com/avatar/4a3a49f693feea55d00ecaeb1a55b0f9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flw.png",},
  ]
  //end mock data
  

  return (
    <div className='Application'>
      <Sidebar name={usertmp.nickname} imgURL={usertmp.picture} friends={frndlst} groups={frndlst}/>
    </div>
  )
}
