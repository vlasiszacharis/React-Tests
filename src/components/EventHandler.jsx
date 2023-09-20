import {useState} from 'react'

function EventHandler(){
    const [inputName,setInputName] = useState('') 


    const handleClick = ()=>{console.log({inputName})}
    const handleChange = (e)=>{
        setInputName(e.target.value)
        console.log({inputName})
    }
    
    return( 
    
       <>
        <button onClick={handleClick}>submit</button>
        <input onChange={handleChange}/>
       </>

    )
}


export default EventHandler;