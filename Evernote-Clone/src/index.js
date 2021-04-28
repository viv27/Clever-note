import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import 'firebase/firestore'


firebase.initializeApp({
   apiKey: "AIzaSyDt2mQ2pyPKYQYhR8YWR2TmN0049iKkVkE",
    authDomain: "clever-note-242f4.firebaseapp.com",
    projectId: "clever-note-242f4",
    storageBucket: "clever-note-242f4.appspot.com",
    messagingSenderId: "290764586425",
    appId: "1:290764586425:web:3f697ffdae33ef76794a68"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));
serviceWorker.unregister();
