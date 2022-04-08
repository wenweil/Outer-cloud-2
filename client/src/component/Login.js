import React, {useState} from 'react'
import './../App.css'

import { Register } from './Register';

export const Login = () => {

  const [register, setRegister] = useState(false);

  const registerButtonCallback = () => {
    setRegister(prev => !prev)
  }

  return (
    <>
      <div className='Login'>
          <header className='Login_Header'>Outer Cloud sign in</header>
          <div className='Login_Form'>
              <div>Email: </div>
              <input type="text"></input>
              <div>Password: </div>
              <input type="text"></input>
          </div>
          <div className="Login_Buttons">
              <button>Sign in</button>
              <button className='Login_Rbutton' onClick={registerButtonCallback}>Register</button>
          </div>
      </div>
      <Register show={register} setShow={registerButtonCallback}/>
    </>
  )
}
