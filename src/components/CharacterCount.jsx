import {useState} from 'react'


function CharacterCounter(){
    const [text,setText] = useState('')
    const handleChange = (event)=>{
        setText(event.target.value)
    }
    
    return(
        <>
            <h1><textarea value={text} onChange={handleChange} /></h1>
            <h2>Character counter is {text.length}</h2>
        </>
    )
}

export default CharacterCounter