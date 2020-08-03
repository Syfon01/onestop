import React from 'react'
import FormInput from '../FormInput/FormInput'
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
      <div>
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required />
          <label>Email</label>
          <FormInput name="password" type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required />
          <label>Password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    )
  }
}

export default SignIn