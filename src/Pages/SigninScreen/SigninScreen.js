import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './SigninScreen.css'
import { auth } from '../../firebase';
const SigninScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((authUser) => { console.log(authUser) }).catch((err) => { alert(err.message) })
  }

  const signIn = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((authUser) => { console.log(authUser) }).catch((err) => { alert(err.message) })
  }
  return (
    <div className='signinScreen'>
      <form>
        <h1>Sign In</h1>
        <input value={email} type='email' placeholder='Email' onChange={e => setEmail(e.target.value)} />
        <input value={password} type='Password' placeholder='password' onChange={e => setPassword(e.target.value)}/>
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
          <span className='signinScreen__gray'>New to Netflix? </span>
          <span className='signinScreen__link' onClick={register}>Sign up Now</span>
        </h4>

      </form>
    </div>
  )
}

export default SigninScreen