import React from 'react'
import {Button} from '@mui/material'
import {auth,provider} from '../../firebase'
import {signInWithPopup} from 'firebase/auth'
import './Login.css'
import {useStateValue} from '../context/StateProvider'
import {actionTypes} from '../context/reducer'


//Sign in with google using firebase to login 

const Login = () => {
  const [state, dispatch] = useStateValue();
  console.log(state);
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className='login'>
            <div className='login_container'>
                <img src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png'
                     alt='logo'/>
             <div className='login_text'>
                UserAdmin
            </div> 
            <Button onClick={signIn}>Login</Button>  
                
            </div>
    </div>
  )
}

export default Login
