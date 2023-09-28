//Build a form that has 4 inputs [name, phone, address, message] on submit button print all 4 values.
import {useState} from 'react'
import './Submit.css'

function App(){
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [adress,setAdress] = useState('')
    const [message,setMessage] = useState('')
    const[form,setForm] = useState({
        name:'',
        phone:'',
        adress:'',
        message:''
    })  

    const handleChange = (event)=>{
        const {name,value} = event.target
        setForm({...form,[name]:value });
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setName(form.name)
        setPhone(form.phone)
        setAdress(form.adress)
        setMessage(form.message)
    }
    
    return(
        <>
           <div class="phone-container">
            <form onSubmit={handleSubmit}>
                <div class="name">
                    <label>
                        <h3>Name :
                    <input type="text" name="name" value={form.name} onChange={handleChange}/></h3>
                    </label>
                </div>   

                <div class="phone">
                    <label>
                        <h3>Phone :
                    <input type="number" name="phone" value={form.phone} onChange={handleChange}/></h3>
                    </label>
                </div>  

                <div class="adress">
                    <label> <h3>Adress :
                    <input type="text" name="adress" value={form.adress} onChange={handleChange}/></h3>
                    </label>
                </div>    

                <div class="message">
                    <label> <h3>Message : 
                    <input type="text"name="message" value={form.message} onChange={handleChange}/> </h3>
                    </label>
                </div>    

             
             <h2><button class="submit-button" type="submit">Submit</button></h2>
            <h2>Your details : {name},{phone},{adress},{message}</h2>
            </form>
            </div>   
        </>

    )
}

export default App;