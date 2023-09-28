import './Dark.css'
import {useState} from 'react'

function LightToggle(){
    const [colour,setColour] = useState("dark")
    const handleClick = ()=>{
        if(colour==="dark"){
            setColour("light")
        }else{
            setColour("dark")
        }
        
    }
    
    return(
            <div className={colour}>
            <button onClick={handleClick}>Activate Button</button>
            </div>

    )
}



export default LightToggle;