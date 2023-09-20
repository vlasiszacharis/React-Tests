import {useState} from 'react';

function LactoseTolerant(){
    return(
        <h1><span role="img" aria-label="broccoli and strawberry">
        🥦🍓
      </span></h1>
    )
}


function LactoseIntolerant(){
    return(
        <h1><span role="img" aria-label="milk and cheese">
        🥛🧀
      </span></h1>
    )
}



function ConditionalRender(){

    const [milk,setMilk] = useState(false);

    return(
        <>
             <button onClick={()=>setMilk(!milk)}>Toggle</button>
             {milk?<LactoseIntolerant />:<LactoseTolerant />}
        </>
    )
}



export default ConditionalRender;
