import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/Shop';
import Header from './components/Header/Header'
import Auth from './pages/auth/auth'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path='/sign-in' component={Auth}></Route>
      </Switch>
    </div>
  );
}

export default App;
