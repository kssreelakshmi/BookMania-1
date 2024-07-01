import React, { useState } from 'react'

const State = () => {
    const [details, SetDetails] = useState({counter:0, name:""})
    function incrementCounter(){
        SetDetails((prev)=>({
            ...prev,
            counter : prev.counter +1,
        }))
    }

  return (
    <div>
        <input type="text" onChange={(e)=> e.target.value} />
        <h3>
            {details.name} has clicked {details.counter} times
        </h3>
        <button onClick={()=>incrementCounter()}></button>
    </div>
  )
}

export default State