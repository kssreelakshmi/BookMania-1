import React, { useMemo, useState } from 'react'

const Memo = () => {
 const [number,setNumber] = useState(0);
 const [dark,setDark] = useState(false);

 const memoCalculation = useMemo(()=>{
    expensiveFunction(number)
 },[number])

//  const calculation = expensiveFunction(number); ordinary way
 const cssStyle = {
    backgroundColor : dark? 'black' : 'white',
    color : dark ? 'white' : 'black' 

 }
  return (

    <div style = {cssStyle}>.
    <input type="number" onChange={(e)=> setNumber(e.target.valueAsNumber)} value = {number} />
    <h2>calculation : {memoCalculation}</h2>
    {/* <h2>calculation : {calculation}</h2> ordinary way */}
    <button onClick={()=>setDark(!dark)}>Toggle</button>

    </div>
  )
  function expensiveFunction(num) {
  console.log('loop started');
  for(let i=0;i<1000000000;i++){}
      
  return num;
  }
}

export default Memo