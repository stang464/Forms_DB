import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyApBLVHtqdq-JUHmgJOJ0zHkX9atb8FwPw',
    authDomain: 'froms-db.firebaseapp.com',
    databaseURL: 'https://froms-db.firebaseio.com',
    projectId: 'froms-db',
    storageBucket: 'froms-db.appspot.com',
    messagingSenderId: '599666904882',
    appId: '1:599666904882:web:d591d2d1884d0b9874d12b',
    measurementId: 'G-ZG5B3EZ8YQ',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
