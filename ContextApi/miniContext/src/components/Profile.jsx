import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext);
  return (
    <>
    {
       user? <div>Welcome {user.username}</div>: <div>Please Login</div>
    }
    </>
  )
}

export default Profile
