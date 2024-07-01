import React,{createContext} from "react";

const context = createContext()

const Context = () => {

  return (
    <context.Provider value = {true}>
        <div>

        </div>
    </context.Provider>


  )
}

export default Context