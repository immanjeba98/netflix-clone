import { signOut } from 'firebase/auth';
import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../../Components/Nav/Nav';
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase';
import './ProfileScreen.css'
const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const logout = () =>{
    signOut(auth)
  }
  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className='profileScreen__details'>
            <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
              <h3>plans</h3>
              <button className='profileScreen__signOut' onClick={logout}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProfileScreen