import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'

function Header() {
  <div className="header">
    <Link className="logo-container" to="/ ">
      <Logo className="logo"/>
    </Link>
    <div className="options">
      <Link className="option">
        Shop
      </Link>
      <Link className="option">
        Contact
      </Link>
      <Link className="option">
        About
      </Link>
    </div>
  </div>
}

export default Header