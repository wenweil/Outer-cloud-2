import React from 'react'
import './../App.css'

export const Login = () => {

  return (
    <div className='Login'>
        <header className='Header'>Outer Cloud sign in</header>
        <div className='Form'>
            <div>Email: </div>
            <input type="text"></input>
            <div>Password: </div>
            <input type="text"></input>
        </div>
        <div className="Buttons">
            <button>Sign in</button>
            <button className='Rbutton'>Register</button>
        </div>
    </div>
  )
}
