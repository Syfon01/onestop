import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/sign-up'
import './auth.scss'
function Auth() {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Auth