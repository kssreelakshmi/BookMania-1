import React, { useEffect, useRef, useState } from 'react'

const Test = () => {
    const [show,setHide] = useState(true)
    const paraRef = useRef(null)
    function toggleVisibility(){
        setHide(!show)
    }

    return (
        <div>
            <button onClick={toggleVisibility}> { show? 'hide':'show'} paragraph</button>
           { show &&
            (
                <p ref={paraRef}>
                The quick brown fox jumps over the lazy dog. This sentence is often
                used to demonstrate the fonts and typing skills because it includes 
                all the letters of the alphabet. The lazy dog, indifferent to the 
                fox's antics, lies still in the grass, basking in the warm sun. 
                Meanwhile, the vibrant forest around them is alive with the sounds 
                of chirping birds and rustling leaves, creating a serene and 
                picturesque scene.
                </p>
            )
           } 
        </div>
    );
}

export default Test;
