
import { useCallback, useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(" ")

  const passwordGenerator = useCallback((array)=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "0123456789"
    }

    if(charAllowed){
      str += "@$%`{}[]+-_&*^%"
    }

    for (let i = 0; i < array.length; i++) {
      let randomChar = Math.floor(Math.random()*str.length+1);
      pass = str.charAt(randomChar);
    }

    setPassword(pass )
  },[length, charAllowed, numberAllowed, setPassword])

  
  return (
    <>
     <div>
      <h3 className='heading'>Password Generator</h3>
      </div>

      <div>
        <input type='text' value={password} className='' readOnly placeholder='password'/>
        <button>Copy</button>
      </div>
    </>
  );
}

export default App;
