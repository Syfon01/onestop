import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/Homepage'

function App() {
  return (
    <Route exact path='/' component={HomePage}></Route>
  );
}

export default App;
