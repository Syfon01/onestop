import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/Homepage'

const Hat = (props) => {
  console.log(props)
  return (
    <h1>Hat Page</h1>
  )
}
function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/shop/hats' component={Hat}></Route>
    </div>
  );
}

export default App;
