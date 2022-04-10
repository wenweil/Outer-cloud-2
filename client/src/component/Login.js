import React, {useState} from 'react'
import './../App.css'
import  axios  from 'axios';

import { Register } from './Register';

export const Login = () => {

  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const registerButtonCallback = () => {
    setRegister(prev => !prev)
  }

  const onEmailChange = (e)=>{
    setEmail(e.target.value)
  }
  const onPasswordChange = (e)=>{
    setPassword(e.target.value)
  }

  const doLogin = async () => {
    const req = new FormData()
    req.append('email',email)
    req.append('password',password)
    const dat = await axios({
      method:'post',
      url:'http://localhost:5000/auth/',
      data: req,
      headers: { "Content-Type": "multipart/form-data" },
    })
    return dat
  }


  return (
    <>
      <div className='Login'>
          <header className='Login_Header'>Outer Cloud sign in</header>
          <div className='Login_Form'>
              <div>Email: </div>
              <input type="text" onChange={onEmailChange}></input>
              <div>Password: </div>
              <input type="password" onChange={onPasswordChange}></input>
          </div>
          <div className="Login_Buttons">
              <button onClick={doLogin}>Sign in</button>
              <button className='Login_Rbutton' onClick={registerButtonCallback}>Register</button>
          </div>
      </div>
      <Register show={register} setShow={registerButtonCallback}/>
    </>
  )
}
