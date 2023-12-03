import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(" ");

  //userRef
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllowed) {
        str += "0123456789";
      }

      if (charAllowed) {
        str += "@$%`{}[]+-_&*^%";
      }

      for (let i = 0; i < length; i++) {
        let randomChar = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(randomChar);
      }

      setPassword(pass);
    },
    [length, charAllowed, numberAllowed, setPassword]
  );

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
   window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
     passwordGenerator();
  },[length, charAllowed, numberAllowed, setPassword])

  return (
    <>
      <div>
        <h3 className="heading">Password Generator</h3>
      </div>

      <div>
        <input
          type="text"
          value={password}
          className=""
          readOnly
          placeholder="password"
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}>Copy</button>
      </div>

      <div>
        <input type="range" min={6} max={50} value={length} className="cursor-pointer" onChange={(e)=>{
          setLength(e.target.value)
        }}/>
        <label>Length: {length}</label>
      </div>
      <div>
      <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={(e)=>{
          setNumberAllowed((prev)=>!prev)
        }}/>
        <label>Numbers</label>
      </div>

      <div>
      <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={(e)=>{
          setCharAllowed((prev)=>!prev)
        }}/>
        <label>Characters</label>
      </div>
    </>
  );
}

export default App;
