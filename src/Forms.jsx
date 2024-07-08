import React, { useState } from 'react'
// import './forms.css'

const Forms = ({user}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [status ,setStatus] = useState('');
    const [isSubmit,setSubmit] = useState(false);
    const [isDisabled,setDisabled] = useState(false);

    function validateInputs(){
        if(user.email === email&& user.password === password){
        setStatus('submitted successfully')
        setSubmit(true)
        setDisabled(true)
      }
      else if(user.email === email && user.password !== password){
        setStatus('password mismatch')
        setSubmit(false)
      }
      else if(user.email !== email && user.password === password){
        setStatus('email mismatch')
        setSubmit(false)
      }
      else{
        setStatus('credentials mistmatch')
        setSubmit(false)
      }
      setTimeout(() => setStatus(''), 5000);

    }


    
    const handleEmail = (e) =>{
        setEmail(e.target.value);
        validateInputs();
    }
    
    const handlePassword = (e) =>{
        setPassword(e.target.value)
        validateInputs();
    }
    const handleLogin = (e) =>{
        e.preventDefault();
        validateInputs();
    }



  return (
    <div className='box'>
        <form className='form' action="" onSubmit={(e)=>handleLogin(e)}>
            <h3 className='head'>Login</h3>
            <label htmlFor="" >Email</label>
            <input type="email" value={email} disabled = {isDisabled} onChange={(e)=>handleEmail(e)}/>

            <label className='form-label' >Password</label>
            <input type="password" value={password} disabled = {isDisabled} onChange={(e)=>handlePassword(e)}/>

            {!isSubmit && <button type='submit'>Submit</button>}
            <p>{status}</p>
        </form>
    </div>
  )
}

export default Forms