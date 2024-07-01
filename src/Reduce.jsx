import React,{useReducer} from 'react'

const initialState = {count : 0}
const reducer =(state,action)=>{
    if(action.type === 'increase'){
        return {count : state.count + 1}
    }
    else{
        return {count : state.count - 1}

    }
}
const Reduce = () => {
    const [state,dispatch] = useReducer(reducer,initialState)

    const increaseCount = () =>{
        dispatch({type :'increase'})
    }
    
    const decreaseCount = () =>{
        dispatch({type :'decrease'})
        
    } 

    return (
        <div>
            <h2>Count : {state.count}</h2>
            <button onClick={()=>increaseCount()}>increase</button>
            <button  onClick={()=>decreaseCount()}>decrease</button>
        </div>
  )
}

export default Reduce