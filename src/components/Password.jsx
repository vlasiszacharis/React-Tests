import './Password.css'
import {useState} from 'react'


function Password(){
   const [show,setShow] = useState(false)
   

   const handleChange= (event)=>{

   }

   const handleSubmit =(event)=>{


   }

   const handleClick = ()=>{
        setShow(!show)
   }
   
   
    return(
        <>
        <div className="password-container">
            <form onSubmit={handleSubmit}>
                <h1>Password:   </h1>
                <h2><input onChange={handleChange} type={show?"text":"password"} placeholder='enter a value'/><button onClick={handleClick} type="button" className="change-type">Change type</button></h2>
                <h2><button className="button" type="submit">Submit</button></h2>
            </form>
         </div>   
        </>

    )
}

export default Password