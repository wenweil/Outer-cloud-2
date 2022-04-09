import React from 'react'
import { axios } from 'axios'

export const Register = ({show, setShow}) => {
  return (
    <>
        {show ? (
            <div  className='Register_Background'>
                <div className='Register'>
                    <header className='Register_Header'>Outer Cloud Register</header>
                    <div className='Register_Form'>
                        <div>Username: </div>
                        <input type="text"></input>
                        <div>Email: </div>
                        <input type="text"></input>
                        <div>Password: </div>
                        <input type="text"></input>
                    </div>
                    <div className="Register_Buttons">
                        <button onClick={setShow}>Cancel</button>
                        <button className='Register_Rbutton'>Register</button>
                    </div>
                </div>
            </div>
        ) : null}
    </>
  )
}
