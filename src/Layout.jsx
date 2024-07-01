import React , {useState,useEffect,useLayoutEffect, useRef} from 'react'

const Layout = () => {
    const [toggle,setToggle] = useState(false);
    const contentRef = useRef(null)

    // useEffect(()=>{
    //     if(contentRef.current != null){

    //         const dimension = contentRef.current.getBoundingClientRect();
    //         // getBoundingClientRect() is used to get all dimensions of this element
    //         contentRef.current.style.paddingTop = `${dimension.height}px`
    //         console.log(dimension)
    //     }
    // },[toggle])

    useLayoutEffect(()=>{
        if(contentRef.current != null){

            const dimension = contentRef.current.getBoundingClientRect();
            // getBoundingClientRect() is used to get all dimensions of this element
            contentRef.current.style.paddingTop = `${dimension.height}px`
            console.log(dimension)
        }
    },[toggle])

  return (
    <>
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        {toggle && <h4 ref={contentRef}>Welcome</h4>}
    </>
  )
}

export default Layout