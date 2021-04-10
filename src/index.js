import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';



firebase.initializeApp({
    apiKey: "AIzaSyC-p090UtGdj0MLvvcllcwUxLqEWar0vd0",
    authDomain: "chat-app-7e4a2.firebaseapp.com",
    projectId: "chat-app-7e4a2",
    storageBucket: "chat-app-7e4a2.appspot.com",
    messagingSenderId: "744883643809",
    appId: "1:744883643809:web:785677d8d7b431a87817e0",
    measurementId: "G-6PRHSV9VMZ"
}
);

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();


ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
