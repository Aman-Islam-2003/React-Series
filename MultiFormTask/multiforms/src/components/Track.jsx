import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import Profile from "./Profile";
import SignUp from "./SignUp";


const Track = () => {
    const state = useSelector((state)=>state)
    console.log(state.trace)
  return (
    <>
    {state.trace === 0 && <div><SignUp/></div>}
    {state.trace === 1 && <div><Login/></div>} 
    {state.trace === 2 && <div><Profile/></div>}
    </>
  )
}

export default Track

