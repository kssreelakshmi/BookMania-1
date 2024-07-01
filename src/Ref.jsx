import React,{useEffect, useRef, useState} from 'react'

const Ref = () => {
    const [name,setName] =useState("");
    // const [count,setCount] =useState(0);
    // useEffect(()=>{
    //     setCount(prev => prev+1)
    // })
    // const [count,setCount] =useState(0);
    const count = useRef(0)
    useEffect(()=>{
        count.current = count.current + 1;
    })

  return (
    <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <h3>Name : {name}</h3>
        <h3>render : {count.current}</h3>
    </div>
  )
}

export default Ref