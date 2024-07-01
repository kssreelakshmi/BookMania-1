import React, { useState,useEffect} from 'react';


const Effect = () => {
    const [count,setCount] = useState(0);
    const [otherCount,setOtherCount] = useState(5);
    useEffect(()=>{
       document.title = `${otherCount}times`;
    },[otherCount])
  return (
    <div>
        <h3>{count}times</h3>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <h3>{otherCount}times</h3>
        <button onClick={()=>setOtherCount(otherCount+5)}>Increase 5times</button>
    </div>
  )
}

export default Effect