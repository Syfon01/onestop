import React from 'react'
import CustomButtom from '../Custom-button/CustomButton'
import FormInput from '../FormInput/FormInput'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utilis'

import './sign-up.scss'
import CustomButton from '../Custom-button/CustomButton'

class SignUp extends React.Component{
  constructor () {
    super()
    
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }

    handleSubmit = async event => {
      event.preventDefault();
     const {displayName, email, password, confirmPassword} = this.state
      
    }
  }
  render() {
     const {displayName, email, password, confirmPassword} = this.state
      return (
        <div className="sign-up">
          <h2 className="title">I do not have any account</h2>
          <span>Sign up with your email and password</span>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              lable="Display Name"
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              lable="Email"
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              lable="Password"
            />
            <FormInput
              type = "password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              lable="Confirm Password"
            />
            <CustomButton type="submit">Sign Up</CustomButton>
          </form>
        </div>
      )
    }
}

export default SignUp