import React, { useState } from 'react'
import axios from 'axios'

export const Register = ({show, setShow}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onUsernameChange = (e)=>{
        setUsername(e.target.value)
    }
    const onEmailChange = (e)=>{
        setEmail(e.target.value)
    }
    const onPasswordChange = (e)=>{
        setPassword(e.target.value)
    }

    const doRegister = async () =>{
        const req = new FormData();
        req.append('username',username)
        req.append('email',email)
        req.append('password',password)
        const dat = await axios({
            method:'POST',
            url:'http://localhost:5000/auth/create',
            data: req,
            headers: { "Content-Type": "multipart/form-data" },
        });
        return dat;
    }

    return (
        <>
            {show ? (
                <div  className='Register_Background'>
                    <div className='Register'>
                        <header className='Register_Header'>Outer Cloud Register</header>
                        <div className='Register_Form'>
                            <div>Username: </div>
                            <input type="text" onChange={onUsernameChange}></input>
                            <div>Email: </div>
                            <input type="text" onChange={onEmailChange}></input>
                            <div>Password: </div>
                            <input type="password" onChange={onPasswordChange}></input>
                        </div>
                        <div className="Register_Buttons">
                            <button onClick={setShow}>Cancel</button>
                            <button className='Register_Rbutton' onClick={doRegister}>Register</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}
