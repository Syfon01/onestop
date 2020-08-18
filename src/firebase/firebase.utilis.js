import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDuBi4cgbCsIRbqDEKKbcAoTafFA6c4OLA",
  authDomain: "crown-shop-4bade.firebaseapp.com",
  databaseURL: "https://crown-shop-4bade.firebaseio.com",
  projectId: "crown-shop-4bade",
  storageBucket: "crown-shop-4bade.appspot.com",
  messagingSenderId: "62902616667",
  appId: "1:62902616667:web:ebc087c2a75f57ece8357e"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase