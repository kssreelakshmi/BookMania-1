import React, { useState } from 'react'

const Mult = () => {
    const [prev,setPrev] = useState(0);
    const [count,setCount] = useState(1);
    // const [mult,setMult] = useState(1);
  return (

    <div>
        <p>count :{count}</p>        
        {/* <p>MULT :{cou}</p>   */}
        <p>Prev :{prev}</p>      
        <button onClick={()=>{
            setPrev(count)
            setCount(count+1)
        }}>Add</button>
        <button onClick={()=>{
            setPrev(count)
            setCount(count*2)
        }}>Multiply</button>
        <button onClick={()=>(prev===count-1)?setCount(prev):prev===(count/2)?setCount(prev): prev}>Prev</button>
    </div>
  )
}

export default Mult