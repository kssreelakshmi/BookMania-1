import React, { useEffect, useRef, useState } from 'react'

const Dropdown = () => {
 const [count,setCount] = useState(0);
 const toggleOneRef = useRef(null);
 const toggleTwoRef = useRef(null);
 const inputRef = useRef(null);

 function incrementCount(buttonId){
  if(inputRef.current.value === 'On' && buttonId === 'Toggle-One'){
    setCount(count+1)
  }
  else if(inputRef.current.value === 'Off' && buttonId === 'Toggle-Two'){
    
    setCount(count+1)
}
 }
useEffect(()=>{
  const handleClick = e =>{
    if(e.target === toggleOneRef.current){
      incrementCount('Toggle-One')
    }
    else if(e.target === toggleTwoRef.current){
      incrementCount('Toggle-Two')
    }
  }
  document.addEventListener('click',handleClick)
  return () =>{
    document.removeEventListener('click',handleClick)
  }
})



  return (

    <div>
       <select name="Toggle" id="Toggle" ref={inputRef}>
        <option value="On">On</option>
        <option value="Off">Off</option>
       </select>
       <p>{count}</p>
       <button ref={toggleOneRef} id='Toggle-One'>Toggle One</button>
       <button ref={toggleTwoRef} id='Toggle-Two'>Toggle Two</button>
    </div>
  )
}

export default Dropdown