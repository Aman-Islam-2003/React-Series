import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({});

  const formHandler = (event) => {
    //console.log(event.target.value, event.target.name);
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8080/demo', {
      method: 'POST',
      body: JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    });
    console.log(response);
   const data = await response.text();

   console.log(data);

  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <label>UserName</label>
          <input type='text' placeholder='Username' name='username' onChange={formHandler} />
          <label>Password</label>
          <input type='password' placeholder='Password' name='password' onChange={formHandler} />

          <input type='submit' />

        </form>
      </div>

    </div>
  )
}

export default App
