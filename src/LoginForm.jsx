import React, { useRef, useState } from 'react'

const LoginForm = ({user}) => {
const [status,setStatus] = useState('');
const [isSubmit,setSubmit] = useState(false);
const emailRef = useRef(null)
const passwordRef = useRef(null)
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(user.email === emailRef.current.value && user.password === passwordRef.current.value){
    setStatus('submitted successfully')
    setSubmit(true)
  }
  else if(user.email === emailRef.current.value && user.password !== passwordRef.current.value){
    setStatus('password mismatch')
    setSubmit(false)
  }
  else if(user.email !== emailRef.current.value && user.password === passwordRef.current.value){
    setStatus('email mismatch')
    setSubmit(false)
  }
  else{
    setStatus('credentials mistmatch')
    setSubmit(false)
  }
  setTimeout(() => setStatus(''), 5000);
}  

  return (

    <div>
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input type="email" ref={emailRef}/>
            <label htmlFor="">Password</label>
            <input type="password" ref={passwordRef} />
            {
              !isSubmit &&
              ( <button type='submit'>Submit</button>)
            }
            <p>{status}</p>
        </form>
    </div>
  )
}

export default LoginForm

