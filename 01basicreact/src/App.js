
import Card from "./components/Card";
import Counter from "./components/Counter";
import ColorChange from "./components/ColorChanger";

function App(){
  
    const user = {
       name:"Aman",
       age:20,
    }

 return(
  <>
  <ColorChange/>
   {/* <Counter/>  */}
   {/* < Card  name={user.name} age={user.age} />
   <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1> */}
  </>
 )
}

export default App;