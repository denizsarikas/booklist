//import firebase from 'firebase/app'
//import 'firebase/firestore'

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBF6BNtFFTy2BTHPXCcvf7uaubZfXHlmg0",
  authDomain: "denizsarikas-booklist.firebaseapp.com",
  projectId: "denizsarikas-booklist",
  storageBucket: "denizsarikas-booklist.appspot.com",
  messagingSenderId: "142576651344",
  appId: "1:142576651344:web:1054b3ca19985a25a5d555"
};

//firebase.initializeApp(firebaseConfig)
//init firebase
initializeApp(firebaseConfig)

//init firestore

const db = getFirestore()

//init firebase auth
const auth = getAuth()

export { db, auth } 