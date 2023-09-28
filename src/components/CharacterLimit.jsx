import {useState} from 'react'


function CharacterLimit(){
   const [counter,setCounter] = useState(0)

   const handleChange = (event)=>{
    setCounter(counter=>counter +1)
    if(event.target.value.length>10){
        alert("something")
    }

   }
    return(
        <>  
            <h1>Character Limit</h1>
            <h2><input onChange={handleChange} type="text"  placeholder="Enter something"/></h2>
        </>
    )
}

export default CharacterLimit;
