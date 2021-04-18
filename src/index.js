import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';



firebase.initializeApp({
  apiKey: "AIzaSyCztl-J4tmmqYxR9bCdCHMZrtiFGYeoyZw",
  authDomain: "form-app-2ccf1.firebaseapp.com",
  projectId: "form-app-2ccf1",
  storageBucket: "form-app-2ccf1.appspot.com",
  messagingSenderId: "436376893057",
  appId: "1:436376893057:web:7db5b029f14d099b397f80",
  measurementId: "G-BFJX05J002"
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
