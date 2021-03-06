import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/Shop';
import Header from './components/Header/Header'
import Auth from './pages/auth/auth'
import { auth, createUserProfileDocument } from './firebase/firebase.utilis';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser : null
    }
}

  unsubscribeFromAuth = null 
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
             id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
    //  createUserProfileDocument(user)
      this.setState({ user : userAuth })
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() { 
    return (
    <div>
        <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path='/sign-in' component={Auth}></Route>
      </Switch>
    </div>
  );
}

  }
  
export default App;
