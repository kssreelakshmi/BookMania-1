import React,{useContext, useContext} from 'react'
import {Context} from './Context'

const Maincomponent = () => {
    const useContext = useContext(Context);
  return (
    <div>Maincomponent</div>
  )
}

export default Maincomponent