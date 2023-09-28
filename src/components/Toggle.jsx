import {useState} from 'react'

function Toggle(){
    
    const[show,setShow] = useState(true)
    const handleClick = ()=>{
        if(show===false){
            setShow(true)
        }else{
            setShow(false)
        }

    }
    return(
        <>
            <button onClick={handleClick}>Toggle</button>
            {show && <h1>how</h1>}
             <p>Some other content...</p>
        </>
    )
}

export default Toggle;