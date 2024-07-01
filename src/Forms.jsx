import React, { useState } from 'react'
import './forms.css'

const Forms = () => {
    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");

    const handleLogin = (e) =>{
    //     e.preventDefault();
    //     alert(`${username} ${password}`)
    }

    const updateUsername = (event) =>{
        setUsername(event.target.value);
    }

    const updatePassword = (event) =>{
        setPassword(event.target.value)
    }



  return (
    <div className='box'>
        <form className='form' action="" onSubmit={handleLogin()}>
            <h3 className='head'>Login</h3>
            <label htmlFor="" className='form-label'>Username</label>
            <input type="text" className='form-input' placeholder='Enter your username' onChange={updateUsername()}/>

            <label className='form-label' >Password</label>
            <input type="password" className='form-input'placeholder='Enter your password' onChange={updatePassword()}/>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Forms