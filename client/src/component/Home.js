import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Logout } from './auth/Logout';
import { Login } from './auth/Login';

export const Home = () => {
  const { isAuthenticated, user } = useAuth0();


  return (
    <div>
      {
        isAuthenticated ? <Logout/> : <Login/>
      }
      {
        isAuthenticated ? <div>{JSON.stringify(user)}</div> : <></>
      }
    </div>
  )
}
