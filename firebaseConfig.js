import firebase from 'firebase';
/*
TENTATIVAS FALHAS

import firebase from 'firebase;'
import 'firebase/storage';
import "firebase/firestore";
*/
const firebaseConfig = {
  apiKey: 'AIzaSyCte8CJeBLWidan56tB5Y4PjX7PEKPYAk0',
  authDomain: 'chave-de-roda-d3b33.firebaseapp.com',
  databaseURL: 'https://chave-de-roda-d3b33-default-rtdb.firebaseio.com',
  projectId: 'chave-de-roda-d3b33',
  storageBucket: 'chave-de-roda-d3b33.appspot.com',
  messagingSenderId: '718942832747',
  appId: '1:718942832747:web:1a200ff410387cb98d092e',
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

const database = firebase.firestore();
export default database

export { auth };
