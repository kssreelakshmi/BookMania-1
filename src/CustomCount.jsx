import React, { useRef, useState } from 'react'
import Ref from './Ref';

const CustomCount = () => {
    const [count,setCount] = useState(0);
    const [value,setValue] = useState(0);
    const handleInput = (e) =>{
        setValue(e.target.valueAsNumber)
    }
    
    const incrementCount = (value)=>{
        setCount(count + value)
        
    }


  return (
    <div>
        <input type='number' onChange={handleInput} value={value}/>
        <button onClick={()=>incrementCount(value)}>Increment</button>
        <p>{count}</p>
    </div>
  )
}

export default CustomCount