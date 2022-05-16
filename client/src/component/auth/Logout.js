import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Logout = () => {
  const { logout } = useAuth0();
  const handleClick = () => {
      logout({
        returnTo: window.location.origin,
      })
  }
  return (
    <button onClick={handleClick}> Logout </button>
  )
}
