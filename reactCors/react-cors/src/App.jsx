import { useState } from 'react'
import './App.css'

function App() {
  const [form , setForm] = useState({});

   const formHandler = (event)=>{
    //console.log(event.target.value, event.target.name);
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
   }

   const handleSubmit = (event)=>{
    event.preventDefault();

    //use fetch for api call
    


   }

  return (
    <div className='container'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <label>UserName</label>
          <input type='text' placeholder='Username' name='username' onChange={formHandler}/>
          <label>Password</label>
          <input type='password' placeholder='Password' name='password' onChange={formHandler}/>

          <input type='submit'/>

        </form>
      </div>

    </div>
  )
}

export default App
