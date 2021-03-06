import React from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../Custom-button/CustomButton'

import { signInWithGoogle } from '../../firebase/firebase.utilis'
import './SignIn.scss'

class SignIn extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = event => {
      event.preventDefault();
      this.setState({
        email: '',
        password: ''
      })
    }
    handleChange = event => {
      const {name , value }= event.target;
      this.setState({[name]:value})
    }
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
            required />
          
          <FormInput name="password" type="password" 
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
            required />

          <div className="buttons">
            <CustomButton type="submit"> Sign in</CustomButton>
            < CustomButton onClick={signInWithGoogle} isGoogleSignin>  Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn